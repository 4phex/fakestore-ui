// src/pages/ProfilePage.tsx

import { Container } from '@mantine/core';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import ProfileCard from '../components/Profile/ProfileCard';

/**
 * ProfilePage
 *
 * Displays authenticated user profile information using the ProfileCard component.
 * Redirects users to the login page if they are not authenticated.
 *
 * @returns {JSX.Element} User profile page or a redirect to login.
 */
const ProfilePage = () => {
  const user = useUserStore((state) => state.user); // Get current user from Zustand store

  // Redirect to login if user is not authenticated
  if (!user) return <Navigate to="/login" replace />;

  // Render profile card for authenticated user
  return (
    <Container size="md" py="xl">
      <ProfileCard user={user} />
    </Container>
  );
};

export default ProfilePage;
