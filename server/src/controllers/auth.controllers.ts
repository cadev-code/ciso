import { Request, Response } from 'express';
import prisma from '../prismaClient';
import jwt from 'jsonwebtoken';

import { compareEncryptedPassword } from '../helpers/compareEncryptedPassword';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    await prisma.users
      .findMany({
        where: { username: username },
      })
      .then(async (result) => {
        // Comprobar que el usuario exista
        if (result.length === 0) {
          res.status(400).json({
            error: 'El usuario no existe',
          });
        } else if (result[0].password_token === 'resetpassword1234') {
          res.status(400).json({
            error: 'Es necesario restablecer la contraseña',
          });
        } else if (
          // Comprobar que la contraseña sea correcta
          await compareEncryptedPassword(password, result[0].password_token)
        ) {
          const token = jwt.sign(
            {
              id: result[0].id,
              username: result[0].username,
            },
            process.env.JWT_SECRET as string, // Verifica previamente la existencia de la variable ya que puede ser tipo string|undefined
            { expiresIn: '48h' },
          );

          res.status(200).json({
            error: null,
            token,
          });
        } else {
          res.status(400).json({
            error: 'Contraseña incorrecta',
          });
        }
      });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

// TODO: hacer commit --amend con el nuevo cambio donde se valida que la contraseña no sea resetpassword1234 al hacer login (comprobar que si funcione)

export const createUser = async (req: Request, res: Response) => {
  const { fullname, username } = req.body;

  try {
    await prisma.users
      .findMany({ where: { username: username } })
      .then(async (result) => {
        // Comprobar que el usuario no exista
        if (result.length > 0) {
          res.status(400).json({
            error: 'El usuario ya existe en la base',
          });
        } else {
          try {
            await prisma;
          } catch (error) {
            res.status(400).json({
              error,
            });
          }
        }
      });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
