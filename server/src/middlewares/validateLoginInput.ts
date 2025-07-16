import { NextFunction, Request, Response } from 'express';

export const validateLoginInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    !req.body?.username ||
    !req.body?.password ||
    req.body?.username.length < 4 ||
    req.body?.password.length < 8
  ) {
    res.status(400).json({
      error:
        'Usuario y Contraseña son requeridos, debe cumplir con el mínimo de caracteres para cada campo',
    });
    return;
  }

  next();
};
