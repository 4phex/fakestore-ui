import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/products';
import { useProductStore } from '../stores/productStore';

/**
 * useProducts Hook
 *
 * Custom React hook to:
 * 1. Fetch all products from the API on mount
 * 2. Store them in the global Zustand store
 * 3. Filter products based on a search input
 *
 * @returns {{
 *   filtered: Product[];      // Filtered product list
 *   search: string;           // Current search query
 *   setSearch: Function;      // Setter for search input
 * }}
 */
export const useProducts = () => {
  const [search, setSearch] = useState(''); // Search input state
  const setAllProducts = useProductStore((state) => state.setAllProducts); // Zustand setter
  const products = useProductStore((state) => state.allProducts); // Zustand product list

  // Fetch products once on component mount
  useEffect(() => {
    fetchAllProducts()
      .then((products) => setAllProducts(products))
      .catch((err) => {
        console.error('Product fetch error:', err);
        setAllProducts([]);
      });
  }, []);

  // Filter products by title that starts with the search input (case-insensitive)
  const filtered = products.filter((p) =>
    p.title.toLowerCase().startsWith(search.trim().toLowerCase())
  );

  return { filtered, search, setSearch };
};
