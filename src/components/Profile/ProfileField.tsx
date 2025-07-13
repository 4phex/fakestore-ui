import { Grid, Text } from '@mantine/core';

type ProfileFieldProps = {
  label: string;
  value: string;
};

/**
 * ProfileField Component
 *
 * A reusable component for displaying a label and its corresponding value
 * in a responsive two-column layout using Mantine's Grid system.
 *
 * Typically used within a <Grid> container to render user profile information
 * such as name, email, phone, or address.
 *
 * @param {string} label - The field name (e.g. "Email", "Phone")
 * @param {string} value - The corresponding field value
 * @returns {JSX.Element} A pair of grid columns for label and value
 */
const ProfileField = ({ label, value }: ProfileFieldProps) => {
  return (
    <>
      {/* Left column: field label */}
      <Grid.Col span={{ base: 6, sm: 4 }}>
        <Text fw={500}>{label.toLocaleUpperCase()}</Text>
      </Grid.Col>

      {/* Right column: field value */}
      <Grid.Col span={{ base: 6, sm: 8 }}>
        <Text size="sm">{value.toLocaleUpperCase()}</Text>
      </Grid.Col>
    </>
  );
};

export default ProfileField;
