export function formatUSD(value: number | string): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(num)) return '$0.00';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export const formatDescription = (text: string): string => {
  if (!text) return '';

  // Step 1: Normalize slashes to commas
  let result = text.replace(/\/+/g, ', ');

  // Step 2: Fix double spaces
  result = result.replace(/\s{2,}/g, ' ');

  // Step 3: Add space after commas
  result = result.replace(/,([^\s])/g, ', $1');

  // Step 4: Capitalize the first letter of each sentence
  result = result
    .split('.')
    .map((sentence) => {
      const trimmed = sentence.trim();
      return trimmed ? trimmed[0].toUpperCase() + trimmed.slice(1) : '';
    })
    .join('. ')
    .trim();

  // Step 5: Ensure final punctuation
  if (!result.endsWith('.')) {
    result += '.';
  }

  return result;
};
