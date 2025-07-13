/**
 * Fetches all products from the Fake Store API.
 * @returns Promise resolving to an array of products.
 */
export const fetchAllProducts = async () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
};
