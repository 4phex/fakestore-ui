import { Grid } from '@mantine/core';
import ProductCard from './ProductCard';
import { Product } from '../../stores/productStore';

type ProductGridProps = {
  products: Product[]; // Consider replacing 'any' with a defined Product type for better type safety
};

/**
 * ProductGrid Component
 *
 * Renders a responsive grid of product cards.
 * Each product is passed to the `ProductCard` component for display.
 *
 * @component
 * @param {ProductGridProps} props - Props object
 * @param {Array} props.products - Array of product objects to be displayed
 * @returns {JSX.Element} A grid layout of product cards
 */
const ProductGrid = ({ products }: ProductGridProps) => (
  <Grid>
    {products.map((product) => (
      // Each product is displayed in a column occupying 4/12 of the grid width
      <Grid.Col span={4} key={product.id}>
        <ProductCard product={product} />
      </Grid.Col>
    ))}
  </Grid>
);

export default ProductGrid;
