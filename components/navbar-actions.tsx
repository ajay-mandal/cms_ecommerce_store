"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

const NavbarActions = () => {

    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex item-center rounded-full px-4 py-2">
                <ShoppingBagIcon
                size={20}
                color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
            </Button>
            Navbar
        </div>
    );
}
 
export default NavbarActions;