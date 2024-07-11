import {
  createMovimiento,
  updateMovimiento,
} from "@/actions/movimientos-actions";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Movimiento } from "@prisma/client";
import Link from "next/link";

export function MovimientoForm({ movimiento }: { movimiento: Movimiento }) {
  const functionAction = movimiento?.id ? updateMovimiento : createMovimiento;

  return (
    <form action={functionAction}>
      <input type="hidden" name="id" value={movimiento?.id} />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Registra un Movimiento</CardTitle>
          {/* <CardDescription>Llena el fomr.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="vehiculo">Vehiculo</Label>
              <Select name="vehiculo" defaultValue={movimiento?.vehiculo}>
                <SelectTrigger id="vehiculo">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="NLI330">NLI330</SelectItem>
                  <SelectItem value="NGU065">NGU065</SelectItem>
                  <SelectItem value="NBA124">NBA124</SelectItem>
                  <SelectItem value="LCW746">LCW746</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="detalle">Detalle</Label>
              <Input
                name="detalle"
                id="detalle"
                placeholder="Detalle del Movimiento"
                defaultValue={movimiento?.detalle}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="novedades">Novedades</Label>
              <Textarea
                name="novedades"
                id="novedades"
                placeholder="Novedades"
                defaultValue={movimiento?.novedades || ""}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>
            Cancelar
          </Link>
          <Button>{movimiento?.id ? "Modificar" : "Registrar"}</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
