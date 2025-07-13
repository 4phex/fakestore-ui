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

/**
 * Renders product metadata and buy action section for a single product.
 * Includes category, title, price, rating, and a buy button that handles
 * conditional routing based on login status.
 *
 * @component
 * @param {Object} props
 * @param {any} props.product - The product object containing title, price, category, and rating
 * @returns {JSX.Element} The rendered product info section
 */
const ProductInfo = ({ product }: { product: any }) => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  /**
   * Handles the Buy Now button click.
   * Redirects to order confirmation if logged in,
   * or to login with redirect intent if not.
   */
  const handleBuy = () => {
    const redirectTo = `/order-confirmation/${product.id}`;
    user ? navigate(redirectTo) : navigate('/login', { state: { redirectTo } });
  };

  return (
    <Group align="start">
      <Stack style={{ flex: 1 }}>
        <Box>
          {/* Product Category Badge */}
          <Badge color="gray">{product.category}</Badge>

          {/* Product Title */}
          <Title mt="sm" order={2}>
            {product.title.toUpperCase()}
          </Title>

          {/* Product Price */}
          <Text fw={400} size="md">
            ${product.price.toFixed(2)}
          </Text>

          {/* Product Rating */}
          <Box mt="xs">
            <Flex align="center" my="sm">
              <Rating value={product.rating.rate} fractions={4} readOnly />
              <Text size="xs" color="gray">
                {product.rating.rate} ({product.rating.count})
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* Buy Button */}
        <Button color="#253746" size="md" onClick={handleBuy}>
          Buy Now
        </Button>

        {/* Divider for visual separation */}
        <Divider my="xs" />
      </Stack>
    </Group>
  );
};

export default ProductInfo;
