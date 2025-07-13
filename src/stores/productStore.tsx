import { create } from 'zustand';
import { persist } from 'zustand/middleware';


type Product = {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: string,
        count: string,
    }
}

type ProductState = {
  currentProduct: Product| null;
  allProducts: Product[] | [];
  setCurrentProduct: (currentProduct: Product) => void;
  setAllProducts: (allProducts: Product[]) => void;
  clearCurrentProduct: () => void;
  clearProductState: () => void;
};

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      currentProduct: null,
      allProducts: [],
      setCurrentProduct: (currentProduct) => set({ currentProduct }),
      setAllProducts: (allProducts) => set({ allProducts }),
      clearCurrentProduct: () => set({ currentProduct: null }),
      clearProductState: () => set({currentProduct: null, allProducts: []})
    }),
    {
      name: 'product-storage',
    }
  )
);