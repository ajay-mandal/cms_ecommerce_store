"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
    data: Product;
}
const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <Badge variant="secondary" className="border border-black">
                        {data.size.value}
                    </Badge>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <Badge variant="secondary" className="border border-black">
                        {data.color.name}
                    </Badge>
                </div>
                <div className="flex items-start gap-x-4 flex-col">
                    <h3 className="font-semibold text-black">Description</h3>
                    <div className="py-2">
                    <p className="text-base font-sans">{data.description}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex item-center gap-x-2 rounded-full" onClick={onAddToCart}>
                    Add to Cart
                    <ShoppingCart className="h-5 w-5"/>
                </Button>
            </div>
        </div>
    );
}
 
export default Info;