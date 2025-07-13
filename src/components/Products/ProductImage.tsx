import { Box, Image } from '@mantine/core';

/**
 * ProductImage component displays a square, centered product image
 * with a 1:1 aspect ratio. It uses Mantine's Box and Image components
 * for layout and styling.
 *
 * @component
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image
 * @returns {JSX.Element} Centered product image with styling
 */
const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  // Wrapper box that maintains a square aspect ratio and centers the image
  <Box
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1', // Square shape
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* Product image with scaling and containment inside box */}
    <Image
      src={src}
      alt={alt}
      fit="contain"
      style={{
        maxWidth: '75%',
        maxHeight: '75%',
        objectFit: 'contain', // Maintain aspect ratio without cropping
      }}
    />
  </Box>
);

export default ProductImage;
