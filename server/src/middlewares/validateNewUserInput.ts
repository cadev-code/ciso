import { NextFunction, Request, Response } from 'express';

export const validateNewUserInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    !req.body?.fullname ||
    !req.body?.username ||
    req.body?.fullname.length < 8 ||
    req.body?.username.length < 4
  ) {
    res.status(400).json({
      error:
        'Nombre Completo y Usuario son requeridos, debe cumplir con el mínimo de caracteres para cada campo',
    });
    return;
  }

  next();
};
