// src/hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/products';
import { useProductStore } from '../stores/productStore';

export const useProducts = () => {
  const [search, setSearch] = useState('');
  const setAllProducts = useProductStore((state)=>state.setAllProducts);
  const products = useProductStore((state)=> state.allProducts);

  useEffect(() => {
    fetchAllProducts()
      .then((products)=> setAllProducts(products))
      .catch((err) => {
        console.error('Product fetch error:', err);
        setAllProducts([]);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().startsWith(search.trim().toLowerCase())
  );

  return { filtered, search, setSearch };
};
