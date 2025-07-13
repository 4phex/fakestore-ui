import { Box, Text } from '@mantine/core';
import { formatDescription } from '../../utils/formatters';

/**
 * ProductDetails Component
 *
 * Displays a product's formatted description in a styled section.
 * Uses a utility formatter to clean or normalize the raw description text.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.description - Raw description text for the product
 * @returns {JSX.Element} Formatted description section
 */
const ProductDetails = ({ description }: { description: string }) => (
  <Box>
    {/* Section header */}
    <Text size="lg" fw={600}>
      PRODUCT DETAILS
    </Text>

    {/* Formatted product description */}
    <Text size="sm" fw={500} mt="xs">
      {formatDescription(description)}
    </Text>
  </Box>
);

export default ProductDetails;
