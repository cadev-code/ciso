import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router';

interface LoginFormValue {
  user: string;
  password: string;
}

export const Login = () => {
  const [formValue, setFormValue] = useState<LoginFormValue>({
    user: '',
    password: '',
  });

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValue((current) => ({ ...current, [e.target.id]: e.target.value }));

  const [validForm, setValidForm] = useState(true);

  const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.user.length < 4 || formValue.password.length < 8) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Documentación CISO</CardTitle>
          <CardDescription>
            Ingresa con tu usuario asignado para iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formOnSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="user">Usuario</Label>
                <Input
                  id="user"
                  type="text"
                  value={formValue.user}
                  onChange={inputOnChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={formValue.password}
                  onChange={inputOnChange}
                  required
                />
                {!validForm && (
                  <div className="text-center text-sm text-destructive">
                    <span>Credenciales incorrectas, intenta de nuevo.</span>
                  </div>
                )}
              </div>
              <Button type="submit">Continuar</Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link to="/set-password" className="underline underline-offset-2">
                Establecer contraseña de usuario
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
