import { Center, Input, Title, Text, Divider } from '@mantine/core';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/Products/ProductGrid';

/**
 * HomePage Component
 *
 * Displays the homepage of the Fake Store app.
 * Fetches the product list using the `useProducts` hook,
 * provides a search input for filtering,
 * and renders the filtered results in a responsive grid.
 *
 * @returns JSX.Element representing the home view
 */
const HomePage = () => {
  // Get filtered product list and search handlers from custom hook
  const { filtered, search, setSearch } = useProducts();

  return (
    <>
      {/* Centered page title */}
      <Center>
        <Title ta="center">Fake Store</Title>
      </Center>

      {/* Search input for product filtering */}
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        my="md"
      />

      {/* Visual separator */}
      <Divider mb="md" />

      <Text size="sm" my="sm"> 
        {filtered.length} RESULTS FOUND
      </Text>

      {/* Display filtered product cards */}
      <ProductGrid products={filtered} />
    </>
  );
};

export default HomePage;
