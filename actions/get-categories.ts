import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    console.error(
      `Failed to fetch categories: ${res.status} ${res.statusText}`,
    );
    return [];
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Response is not JSON");
    return [];
  }

  return res.json();
};

export default getCategories;
