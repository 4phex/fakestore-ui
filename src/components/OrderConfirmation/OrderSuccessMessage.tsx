import { Button, Stack, Text, Title } from '@mantine/core';

type Props = {
  productTitle: string;   // Title of the purchased product
  onContinue: () => void; // Callback when "Continue Shopping" is clicked
};

/**
 * OrderSuccessMessage Component
 *
 * Renders a congratulatory message with the product name and a call-to-action button.
 * Typically used after completing a purchase to confirm the order to the user.
 *
 * @component
 * @param {string} productTitle - The title of the purchased product
 * @param {function} onContinue - Function to call when the user clicks "Continue Shopping"
 * @returns {JSX.Element}
 */
const OrderSuccessMessage = ({ productTitle, onContinue }: Props) => (
  <Stack align="center">
    {/* Confirmation title */}
    <Title order={2}>🎉 Congrats!</Title>

    {/* Confirmation message with dynamic product title */}
    <Text size="lg" ta="center">
      Order for <strong>{productTitle}</strong> has been confirmed.
    </Text>

    {/* Call-to-action button to return to shopping */}
    <Button onClick={onContinue}>Continue Shopping</Button>
  </Stack>
);

export default OrderSuccessMessage;
