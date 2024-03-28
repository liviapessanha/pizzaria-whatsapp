import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Button className="relative">
                <ShoppingCart className="my-4"/>
                <p>Carrinho</p>
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
            </SheetHeader>

            <Separator className="my-4"/>

            <div className="flex justify-between items-center text-sm">
                <div>SubTotal: </div>
                <div>R$ </div>
            </div>

            <Separator className="my-4"/>

            <div className="text-center">
                <Button >
                    Finalizar Compra
                </Button>
            </div>
        </SheetContent>
    </Sheet>

  );
}