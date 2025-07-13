/**
 * LoginForm component
 * 
 * Renders a login form using Mantine UI components.
 * Handles validation, displays form errors, and triggers the login process
 * using the useLogin hook. 
 */

import {
  TextInput,
  PasswordInput,
  Paper,
  Button,
  Notification,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const LoginForm = () => {
  // State for displaying login errors
  const [error, setError] = useState('');

  // Login handler from custom hook
  const login = useLogin();

  // Mantine form hook with initial values and field-level validation
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => {
        if (!value) return 'Email is required';
        return /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format';
      },
      password: (value) => {
        if (!value) return 'Password is required';
        return value.length >= 6 ? null : 'Password must be at least 6 characters';
      },
    },
  });

  /**
   * Submits the form and attempts to log the user in.
   * Displays an error if login fails.
   */
  const handleSubmit = async () => {
    const { success, error } = await login(form.values);

    if (!success) {
      setError(error || 'Login failed');
    } else {
      setError('');
    }
  };

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {/* Email input field */}
        <TextInput
          label="Email"
          placeholder="you@example.com"
          {...form.getInputProps('email')}
        />

        {/* Password input field */}
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          {...form.getInputProps('password')}
        />

        {/* Error notification if login fails */}
        {error && (
          <Notification color="red" mt="md" onClose={() => setError('')}>
            {error}
          </Notification>
        )}

        {/* Submit button */}
        <Button fullWidth mt="xl" type="submit">
          Log In
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
