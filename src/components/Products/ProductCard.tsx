// src/components/Product/ProductCard.tsx
import { Card, Text, Image, Box, Divider, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { formatUSD } from '../../utils/formatters';
import { useProductStore } from '../../stores/productStore';

type ProductCardProps = {
  product: any;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const setProduct = useProductStore((state) => state.setCurrentProduct);

  const handleClick = () => {
    setProduct(product);
    navigate(`/product/${product.id}`)
  }

  return (
    <Card
      withBorder
      p="sm"
      radius={0}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
         aspectRatio: '1 / 1'
      }}
      onClick={() => handleClick()}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* Product image with fixed aspect ratio */}
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

      <Divider mt="md"/>

      {/* Card content */}
      <Box mt="sm">
        <Flex justify="space-between" align="center">
            {/* Subtext like category */}
            <Text size="xs" c="dimmed">
                {product.category}
            </Text>
            {/* Price */}
            <Text fw={600} size="sm" style={{color: "#253746"}}> 
                {formatUSD(product.price)}
            </Text>
        </Flex>

        {/* Product title */}
        <Text fw={600} size="sm" style={{color: "#253746"}} truncate="end">
          {product.title}
        </Text>

      </Box>
    </Card>
  );
};

export default ProductCard;
