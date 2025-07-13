import { Card, Text, Image, Box, Divider, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { formatUSD } from '../../utils/formatters';
import { Product, useProductStore } from '../../stores/productStore';

type ProductCardProps = {
  product: Product;
};

/**
 * ProductCard Component
 *
 * Displays an individual product as a clickable card with an image, title, category, and price.
 * On click, it sets the product in the store and navigates to the product detail page.
 *
 * @component
 * @param {ProductCardProps} props - The props object
 * @param {object} props.product - Product data to render
 * @returns {JSX.Element} A styled product card
 */
const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const setProduct = useProductStore((state) => state.setCurrentProduct);

  /**
   * Handles click event:
   * - Sets the current product in global store
   * - Navigates to the product detail page
   */
  const handleClick = () => {
    setProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      withBorder
      p="sm"
      radius={0}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        aspectRatio: '1 / 1',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* Product image with fixed aspect ratio and centered alignment */}
      <Box
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fit="contain"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Divider separating image from content */}
      <Divider mt="md" />

      {/* Product information section */}
      <Box mt="sm">
        {/* Category and price in a row */}
        <Flex justify="space-between" align="center">
          <Text size="xs" c="dimmed">
            {product.category}
          </Text>
          <Text fw={600} size="sm" style={{ color: '#253746' }}>
            {formatUSD(product.price)}
          </Text>
        </Flex>

        {/* Product title truncated to one line */}
        <Text fw={600} size="sm" style={{ color: '#253746' }} truncate="end">
          {product.title}
        </Text>
      </Box>
    </Card>
  );
};

export default ProductCard;
