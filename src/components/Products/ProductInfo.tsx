// src/components/Product/ProductInfo.tsx
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/userStore';

const ProductInfo = ({ product }: { product: any }) => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleBuy = () => {
    const redirectTo = `/order-confirmation/${product.id}`;
    user ? navigate(redirectTo) : navigate('/login', { state: { redirectTo } });
  };

  return (
    <Group align="start">
      <Stack style={{ flex: 1 }}>
        <Box>
          <Badge color="gray">{product.category}</Badge>
          <Title mt="sm" order={2}>
            {product.title.toUpperCase()}
          </Title>
          <Text fw={400} size="md">
            ${product.price.toFixed(2)}
          </Text>
          <Box mt="xs">
                    <Flex align="center" my="sm">
          <Rating value={product.rating.rate} fractions={4} readOnly />
            <Text size="xs" color="gray">
              {product.rating.rate} ({product.rating.count})
            </Text>
                    </Flex>
          </Box>
        </Box>
        <Button color="#253746" size="md" onClick={handleBuy}>
          Buy Now
        </Button>
        <Divider mt="xs" />
      </Stack>
    </Group>
  );
};

export default ProductInfo;
