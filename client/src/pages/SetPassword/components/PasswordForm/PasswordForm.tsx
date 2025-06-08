import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { onInputChange } from '@/helpers';
import { ChangeEvent, FormEvent, useState } from 'react';

interface PasswordFormValue {
  password: string;
  repeatPassword: string;
}

interface PasswordValidForm {
  password: boolean;
  repeatPassword: boolean;
}

export const PasswordForm = () => {
  const [formValue, setFormValue] = useState<PasswordFormValue>({
    password: '',
    repeatPassword: '',
  });

  const [validForm, setValidForm] = useState<PasswordValidForm>({
    password: false,
    repeatPassword: false,
  });

  const passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.$@#!*/+?])[A-Za-z\d.$@#!*/+?]{8,}$/;

  const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValidForm((current) =>
      e.target.id === 'password'
        ? { ...current, [e.target.id]: passwordRegex.test(e.target.value) }
        : { ...current, [e.target.id]: formValue.password === e.target.value },
    );

    onInputChange(e, setFormValue);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validForm.password || !validForm.repeatPassword) return;
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <p className="text-sm font-semibold">Documentación CISO</p>
        <CardTitle className="text-xl">Establece tu nueva contraseña</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmitForm}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                value={formValue.password}
                onChange={onPasswordInputChange}
                required
              />
              <div className="grid gap-1 text-start text-sm">
                <span
                  className={`text-${validForm.password ? 'green' : 'red'}-600`}
                >
                  Mínimo 8 caracteres de los cuales debe incluir una minúscula,
                  una mayúscula, un número y al menos uno de los siguientes
                  caracteres especiales (.$@#!*/+?)
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeatPassword">Confirma tu contraseña</Label>
              <Input
                id="repeatPassword"
                value={formValue.repeatPassword}
                onChange={onPasswordInputChange}
                required
              />
              <div className="grid gap-1 text-start text-sm">
                {!validForm.repeatPassword && (
                  <span className="text-red-600">
                    Contraseñas no coinciden, verifica las entradas.
                  </span>
                )}
              </div>
            </div>
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
