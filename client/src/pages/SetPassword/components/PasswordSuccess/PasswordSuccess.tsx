import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router';

export const PasswordSuccess = () => {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <CardHeader>
        <p className="text-sm font-semibold">Documentación CISO</p>
        <CardTitle className="text-xl">Actualización Completada</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <p>
            Se establecio la contraseña correctamente, intenta acceder con tus
            nuevas credenciales.
          </p>
          <Button onClick={() => navigate('/login')}>
            Ir al inicio de sesión
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
