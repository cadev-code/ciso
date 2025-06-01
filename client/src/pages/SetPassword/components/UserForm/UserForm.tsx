import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { onInputChange } from '@/helpers';
import { FormEvent, useState } from 'react';

interface UserFormValue {
  user: string;
}

export const UserForm = () => {
  const [formValue, setFormValue] = useState<UserFormValue>({ user: '' });

  const [validForm, setValidForm] = useState<boolean>(true);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.user.length < 4) {
      setValidForm(false);
      return;
    }

    setValidForm(true);
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <p className="text-sm font-semibold">Documentación CISO</p>
        <CardTitle className="text-xl">Actualizar Contraseña</CardTitle>
        <CardDescription>
          Es necesario actualizar tu contraseña de acceso, ingresa tu usuario
          asignado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onFormSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                placeholder="Usuario"
                id="user"
                value={formValue.user}
                onChange={(e) => onInputChange(e, setFormValue)}
                required
              />
              {!validForm && (
                <div className="text-sm text-destructive">
                  <span>
                    Usuario incorrecto, de no ser así solícita un cambio de
                    contraseña al administrador.
                  </span>
                </div>
              )}
            </div>
            <Button>Siguiente</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
