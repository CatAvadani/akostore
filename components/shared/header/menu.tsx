import { Button } from "@/components/ui/button";
import { SelectSeparator } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Link from "next/link";
import ModeToggle from "../modeToggle";
import UserButton from "./userButton";

const Menu = () => {
  return (
    <div className=" flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className=" md:hidden">
        <Sheet>
          <SheetTrigger className=" align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className=" flex flex-col items-start p-4 ">
            <SheetTitle className="ml-4">Menu</SheetTitle>
            <SelectSeparator className="border border-black/20 w-full"></SelectSeparator>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
