"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "lucide-react";

import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

const NavbarActions = () => {

    const [ isMounted, setIsMounted ] = useState(false);
    const cart = useCart();
    const route = useRouter();

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => route.push("/cart")} className="flex item-center rounded-full px-4 py-2">
                <ShoppingBagIcon
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}
 
export default NavbarActions;