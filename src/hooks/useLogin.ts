import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import { loginUser } from '../api/auth';
import { useProductStore } from '../stores/productStore';

type LoginInput = {
  email: string;
  password: string;
};

/**
 * useLogin hook
 *
 * A custom hook that handles login logic by:
 * - Calling the loginUser API function
 * - Setting the authenticated user in Zustand
 * - Persisting the user in localStorage
 * - Redirecting to the homepage
 *
 * @returns An async login function that accepts email and password,
 * and returns a success flag and optional user or error message
 */
export const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const currentProduct = useProductStore((state) => state.currentProduct);

  /**
   * Attempts to log in with the provided credentials.
   * If successful, stores user state and redirects.
   *
   * @param credentials - The user's login email and password
   * @returns Result of the login attempt including success flag and error/user
   */
  const login = async ({ email, password }: LoginInput) => {
    const result = await loginUser(email, password);

    if (result.success && result.user) {
        // Update global user store
        setUser(result.user);

        //User trying to buy product so redirect to order confirmation page
        if (!!currentProduct) {
            navigate(`/order-confirmation/${currentProduct.id}`);
        }
        else{
            // Redirect to homepage
            navigate('/');
        }
    }

    return result;
  };

  return login;
};
