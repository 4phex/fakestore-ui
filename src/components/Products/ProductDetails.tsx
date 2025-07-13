// src/components/Product/ProductDetails.tsx
import { Box, Text } from '@mantine/core';
import { formatDescription } from '../../utils/formatters';

const ProductDetails = ({ description }: { description: string }) => (
  <Box>
    <Text size="lg" fw={600}>
      PRODUCT DETAILS
    </Text>
    <Text size="sm" fw={500} mt="xs">
      {formatDescription(description)}
    </Text>
  </Box>
);

export default ProductDetails;
