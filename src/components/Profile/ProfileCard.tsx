// src/components/Profile/ProfileCard.tsx
import {
  Card,
  Title,
  Divider,
  Grid,
  Stack,
} from '@mantine/core';
import ProfileField from './ProfileField';

type User = {
  name: { firstname: string; lastname: string };
  phone: string;
  email: string;
  address: { city: string; street: string; number: number; zipcode: string };
};

const ProfileCard = ({ user }: { user: User }) => {
  const {
    name: { firstname, lastname },
    phone,
    email,
    address: { city, street, number, zipcode },
  } = user;

  return (
    <Card withBorder radius="md" padding="xl" shadow="sm">
      <Stack gap="sm">
        <Title order={2} size="h3">
          User Profile Information
        </Title>
        <Divider />
        <Grid gutter="sm">
          <ProfileField label="Name:" value={`${firstname} ${lastname}`} />
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
