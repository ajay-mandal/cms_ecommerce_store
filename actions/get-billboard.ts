import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    console.error(`Failed to fetch billboard: ${res.status} ${res.statusText}`);
    return {} as Billboard;
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Response is not JSON");
    return {} as Billboard;
  }

  return res.json();
};

export default getBillboard;
