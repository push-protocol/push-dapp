import { Text } from 'blocks';

// Function to safely parse the stringified list into an array
export const parseStringToArray = (stringified: string): string[] => {
  try {
    // Remove unwanted characters (`[` and `]`) and split the string
    return stringified
      .replace(/[\[\]`]/g, '') // Remove brackets and backticks
      .split(',') // Split by commas
      .map((item) => item.trim()); // Trim spaces from each item
  } catch (error) {
    console.error('Failed to parse the stringified list:', error);
    return [];
  }
};

export const formatSentenceWithBoldNumbers = (benefit: string) => {
  // Split the string by spaces and punctuation (e.g., commas, periods)
  const parts = benefit.split(/(\s+|\W+)/);

  return (
    <Text
      color="text-primary"
      variant="bs-regular"
    >
      {parts.map((part, index) => {
        // Check if the part is a number and if it is greater than 100
        if (/\d+/.test(part) && Number(part) > 100) {
          return (
            <Text
              key={index}
              variant="bs-bold"
              color="text-primary"
              as="span"
            >
              {part}
            </Text>
          );
        }

        // Check for the word "unlimited" and bold it
        if (/unlimited/i.test(part)) {
          return (
            <Text
              key={index}
              variant="bs-bold"
              color="text-primary"
              as="span"
            >
              {part}
            </Text>
          );
        }

        // For all other parts, just return as normal
        return <span key={index}>{part}</span>;
      })}
    </Text>
  );
};
