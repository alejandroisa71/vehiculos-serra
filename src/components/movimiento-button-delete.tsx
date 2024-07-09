import { removeMovimiento } from "@/actions/movimientos-actions";
import { Button } from "./ui/button";

export function MovimientoButtonDelete({
  movimientoId,
}: {
  movimientoId: number;
}) {
  return (
    <form action={removeMovimiento}>
      <input type="hidden" name="movimientoId" value={movimientoId} />
      <Button variant="destructive">Delete</Button>
    </form>
  );
}
