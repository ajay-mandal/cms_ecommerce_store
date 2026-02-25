import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () : Promise<Size[]> => {
    const res = await fetch(URL);

    if (!res.ok) {
        console.error(`Failed to fetch sizes: ${res.status} ${res.statusText}`);
        return [];
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        console.error('Response is not JSON');
        return [];
    }

    return res.json();
}

export default getSizes;