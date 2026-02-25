import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    console.error(`Failed to fetch category: ${res.status} ${res.statusText}`);
    return {} as Category;
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Response is not JSON");
    return {} as Category;
  }

  return res.json();
};

export default getCategory;
