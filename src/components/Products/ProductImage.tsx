// src/components/Product/ProductImage.tsx
import { Box, Image } from '@mantine/core';

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <Box
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Image
      src={src}
      alt={alt}
      fit="contain"
      style={{
        maxWidth: '75%',
        maxHeight: '75%',
        objectFit: 'contain',
      }}
    />
  </Box>
);

export default ProductImage;
