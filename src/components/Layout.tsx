import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Flex, Button, Group } from '@mantine/core';
import { useUserStore } from '../stores/userStore';
import { useProductStore } from "../stores/productStore";

/**
 * LayoutHeader
 *
 * Navigation bar displayed at the top of every page.
 * Dynamically renders navigation buttons based on authentication state.
 *
 * - Clears product/user state on logout
 * - Prevents redundant navigation if already on home
 */
export const Layout = () => {
  const navigate = useNavigate();
  const clearUserState = useUserStore((state)=>state.clearUserState);

  const clearProductState = useProductStore((state)=>state.clearProductState);
  const isLoggedIn = useUserStore((state)=>state.user);
  const location = useLocation();

   /**
   * Clear product state unless already on the homepage
   */
  const handleHome = () => {
    if(location.pathname == '/') return;
    clearProductState();
  };

    /**
   * Clear localStorage and all persisted state on logout
   */
  const handleLogout = () => {
    clearProductState();
    clearUserState();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Container>
      <Flex justify="space-between" align="center" my="md">
        {/* Left: Home button */}
        <Group>
          <Button variant="subtle" onClick={handleHome} component={Link} to="/">Home</Button>
        </Group>

        {/* Right: Auth-based controls */}
        <Group>
          {isLoggedIn ? (
            <>
              <Button variant="subtle" component={Link} to="/profile">Profile</Button>
              <Button onClick={handleLogout}>Log Out</Button>
            </>
          ) : (
            <Button component={Link} to="/login">Log In</Button>
          )}
        </Group>
      </Flex>
      <Outlet />
    </Container>
  );
};