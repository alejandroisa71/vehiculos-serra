"use server";
import { redirect } from "next/navigation";
import {db} from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createMovimiento(formData: FormData) {
  const vehiculo = formData.get("vehiculo")?.toString();
  const detalle = formData.get("detalle")?.toString();
  const novedades = formData.get("novedades")?.toString();
  console.log({ vehiculo, detalle, novedades });

  if (!vehiculo || !detalle) {
    return;
  }

  const newMovimiento = await db.movimiento.create({
    data: {
      vehiculo: vehiculo,
      detalle: detalle,
      novedades: novedades,
    },
  });

  console.log(newMovimiento);
  redirect("/");
}

export async function removeMovimiento(formData: FormData) {
  const movimientoId = formData.get("movimientoId")?.toString();

  if (!movimientoId) {
    return;
  }

  await db.movimiento.delete({
    where: {
      id: parseInt(movimientoId),
    },
  });
  revalidatePath("/");
}

export async function updateMovimiento(formData: FormData) {
  const id = formData.get("id")?.toString();
  const vehiculo = formData.get("vehiculo")?.toString();
  const detalle = formData.get("detalle")?.toString();
  const novedades = formData.get("novedades")?.toString();

  if (!id || !vehiculo || !detalle || !novedades) {
    return;
  }

  await db.movimiento.update({
    where: {
      id: parseInt(id),
    },
    data: {
      vehiculo: vehiculo,
      detalle: detalle,
      novedades: novedades,
    },
  });

  redirect("/")

  console.log({ id, vehiculo, detalle, novedades });
}
