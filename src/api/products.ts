/**
 * Fetches all products from the Fake Store API.
 * @returns Promise resolving to an array of products.
 */
export const fetchAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
};
