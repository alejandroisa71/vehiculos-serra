import { MovimientoForm } from "@/app/(protected)/new/movimiento-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function MovimientoPageEdit({
  params,
}: {
  params: { id: string };
}) {
  const movimiento = await prisma.movimiento.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!movimiento) {
    redirect("/");
  }

  console.log(movimiento);

  return (
    <div className="flex justify-center items-center h-screen">
      <MovimientoForm movimiento={movimiento} />
    </div>
  );
}
