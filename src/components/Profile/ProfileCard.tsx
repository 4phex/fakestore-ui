import {
  Card,
  Title,
  Divider,
  Grid,
  Stack,
} from '@mantine/core';
import ProfileField from './ProfileField';

/**
 * Represents a simplified user profile object for props.
 */
type UserProps = {
  name: { firstname: string; lastname: string };
  phone: string;
  email: string;
  address: { city: string; street: string; number: number; zipcode: string };
};

/**
 * Renders a card displaying the user's profile information such as name, email,
 * phone number, and address using Mantine UI components.
 *
 * @component
 * @param {Object} props - Component props
 * @param {User} props.user - The user object containing profile details
 * @returns {JSX.Element} Rendered user profile card
 */
const ProfileCard = ({ user }: { user: UserProps }) => {
  // Destructure user fields for cleaner usage
  const {
    name: { firstname, lastname },
    phone,
    email,
    address: { city, street, number, zipcode },
  } = user;

  return (
    <Card withBorder radius="md" padding="xl" shadow="sm">
      <Stack gap="sm">
        {/* Profile Title */}
        <Title order={2} size="h3">
          User Profile Information
        </Title>

        {/* Divider for separation */}
        <Divider />

        {/* Grid layout for profile fields */}
        <Grid gutter="sm">
          <ProfileField label="First Name:" value={firstname} />
          <ProfileField label="Last Name:" value={lastname} />
          <ProfileField label="Email:" value={email} />
          <ProfileField label="Phone:" value={phone} />
          <ProfileField
            label="Address:"
            value={`${number} ${street}, ${city}, ${zipcode}`}
          />
        </Grid>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
