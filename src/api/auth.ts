/**
 * Authenticates a user by checking provided email and password
 * against the user list fetched from fakestoreapi.com.
 *
 * @param email - The user's email address
 * @param password - The user's plain-text password
 * @returns An object containing a success flag and either the user object or an error message
 */
export const loginUser = async (email: string, password: string) => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  
  try {
    const response = await fetch(`${BASE_URL}/users`);

    // Handle failed network response
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await response.json();

    // Find a user with matching email and password
    const matchedUser = users.find(
      (user: any) => user.email === email && user.password === password
    );

    // Return success result if user is found
    if (matchedUser) {
      return { success: true, user: matchedUser };
    }

    // Return failure result if credentials don't match
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    // Log error for debugging (optional)
    console.error('Login error:', error);

    // Return generic failure response
    return {
      success: false,
      error: 'Something went wrong. Please try again.',
    };
  }
};
