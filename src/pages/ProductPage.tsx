// src/pages/ProductPage.tsx

import { Container, Grid, Loader } from '@mantine/core';
import ProductImage from '../components/Products/ProductImage';
import ProductInfo from '../components/Products/ProductInfo';
import ProductDetails from '../components/Products/ProductDetails';
import { useProductStore } from '../stores/productStore';

/**
 * ProductPage Component
 *
 * Displays detailed information for a single product.
 * Retrieves the `currentProduct` from the Zustand store and renders:
 * - A large product image
 * - Title, price, category, and rating
 * - A description and additional product details
 *
 * If `currentProduct` is not yet available, shows a loading spinner.
 *
 * @returns JSX.Element representing the product detail page
 */
const ProductPage = () => {
  // Get the currently selected product from global product store
  const product = useProductStore((state) => state.currentProduct);

  // If no product is loaded yet, show a loading spinner
  if (!product) {
    return (
      <Container my="xl">
        <Loader />
      </Container>
    );
  }

  return (
    <Container my="xl">
      <Grid>
        {/* Left column: product image */}
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <ProductImage src={product.image} alt={product.title} />
        </Grid.Col>

        {/* Right column: product info + description */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <ProductInfo product={product} />
          <ProductDetails description={product.description} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProductPage;
