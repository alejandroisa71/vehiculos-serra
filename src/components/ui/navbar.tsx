import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import { buttonVariants } from "./button";

function Navbar() {
  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Vehiculos-Serra</h1>

      </Link>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({variant:"secondary"})}>Nuevo Movimiento</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
export default Navbar;
