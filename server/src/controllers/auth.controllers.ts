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
