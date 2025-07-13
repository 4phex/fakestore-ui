import { Center, Container, Text, Title } from '@mantine/core';
import LoginForm from '../components/LoginForm';

/**
 * LoginPage Component
 *
 * Renders the login screen of the Fake Store app.
 * Displays a title, subheading, and a login form for user authentication.
 * This page is typically used for gated routes or user sessions.
 *
 * @returns JSX.Element representing the login view
 */
const LoginPage = () => {
  return (
    <Container size={420} my={40}>
      {/* Login Page Title */}
      <Center>
        <Title ta="center">Fake Store</Title>
      </Center>

      {/* Subheading text under the title */}
      <Text size="sm" mt="sm" ta="center" c="dimmed">
        Please log in to continue
      </Text>

      {/* Login form component */}
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
