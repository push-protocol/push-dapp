export const sortByIndexNumber = (a: any, b: any) => {
  const numA = parseInt(a.index?.split('-').pop() || '0', 10);
  const numB = parseInt(b.index?.split('-').pop() || '0', 10);
  return numA - numB;
};
