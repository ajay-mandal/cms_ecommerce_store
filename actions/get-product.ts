import {Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string) : Promise<Product> => {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
        console.error(`Failed to fetch product: ${res.status} ${res.statusText}`);
        return {} as Product;
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        console.error('Response is not JSON');
        return {} as Product;
    }

    return res.json();
}

export default getProduct;