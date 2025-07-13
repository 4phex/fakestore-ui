// src/pages/OrderConfirmationPage.tsx

import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Loader } from '@mantine/core';
import { useUserStore } from '../stores/userStore';
import { useProductStore } from '../stores/productStore';
import OrderSuccessMessage from '../components/OrderConfirmation/OrderSuccessMessage';

/**
 * OrderConfirmationPage
 *
 * This page is displayed after a user successfully places an order.
 * It confirms the order and allows the user to continue shopping.
 * 
 * Features:
 * - Redirects unauthenticated users back to the login page.
 * - Displays loading state while waiting for product data.
 * - Renders a success message for the purchased product.
 *
 * @returns {JSX.Element} The order confirmation UI.
 */
const OrderConfirmationPage = () => {
  const { id } = useParams(); // Extract product ID from route
  const navigate = useNavigate(); // Router navigation hook
  const user = useUserStore((state) => state.user); // Retrieve user from Zustand store
  const product = useProductStore((state) => state.currentProduct); // Retrieve product info
  const clearProductState = useProductStore((state) => state.clearProductState); // Reset product state

  // Redirect unauthenticated users to login with redirect back to confirmation
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { redirectTo: `/order-confirmation/${id}` } });
    }
  }, [user]);

  // Show loading spinner if product info hasn't loaded yet
  if (!product) {
    return (
      <Container my="xl">
        <Loader />
      </Container>
    );
  }

  // Render success message and "Continue Shopping" action
  return (
    <Container size="sm" my="xl">
      <OrderSuccessMessage
        productTitle={product.title}
        onContinue={() => {
          clearProductState();
          navigate('/');
        }}
      />
    </Container>
  );
};

export default OrderConfirmationPage;
