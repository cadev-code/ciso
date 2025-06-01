import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const PasswordForm = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <p className="text-sm font-semibold">Documentación CISO</p>
        <CardTitle className="text-xl">Establece tu nueva contraseña</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" required />
              <div className="grid gap-1 text-start text-sm">
                <span className="text-red-600">- 1 Mayúscula</span>
                <span>- 1 Manúscula</span>
                <span>- 1 Número</span>
                <span>- 1 Símbolo (@,#,$,*)</span>
                <span>- Mínimo 8 carácteres</span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repeatPassword">Confirma tu contraseña</Label>
              <Input id="repeatPassword" required />
            </div>
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
