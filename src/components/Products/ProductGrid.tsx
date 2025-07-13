// src/components/Product/ProductGrid.tsx
import { Grid } from '@mantine/core';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: any[];
};

const ProductGrid = ({ products }: ProductGridProps) => (
  <Grid>
    {products.map((product) => (
      <Grid.Col span={4} key={product.id}>
        <ProductCard product={product} />
      </Grid.Col>
    ))}
  </Grid>
);

export default ProductGrid;
