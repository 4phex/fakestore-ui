// src/components/OrderConfirmation/OrderSuccessMessage.tsx
import { Button, Stack, Text, Title } from '@mantine/core';

type Props = {
  productTitle: string;
  onContinue: () => void;
};

/**
 * Displays a congratulatory order confirmation message and CTA.
 */
const OrderSuccessMessage = ({ productTitle, onContinue }: Props) => (
  <Stack align="center">
    <Title order={2}>🎉 Congrats!</Title>
    <Text size="lg" ta="center">
      Order for <strong>{productTitle}</strong> has been confirmed.
    </Text>
    <Button onClick={onContinue}>Continue Shopping</Button>
  </Stack>
);

export default OrderSuccessMessage;
