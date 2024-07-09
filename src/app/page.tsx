import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MovimientoButtonDelete } from "@/components/movimiento-button-delete";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

async function HomePage() {
  const movimientos = await prisma.movimiento.findMany();
  // console.log(movimientos)
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Vehiculo</TableHead>
            <TableHead>Detalle</TableHead>
            <TableHead>Novedades</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {movimientos.map((movimiento) => (
            <TableRow key={movimiento.id}>
              <TableCell className="font-medium">
                {movimiento.vehiculo}
              </TableCell>
              <TableCell>{movimiento.detalle}</TableCell>
              <TableCell>{movimiento.novedades}</TableCell>
              <TableCell className="text-right">
                <MovimientoButtonDelete movimientoId={movimiento.id} />
              </TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/movimientos/${movimiento.id}/edit`}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Edit
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default HomePage;
