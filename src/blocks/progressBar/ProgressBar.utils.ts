export const getProgressWidthPercentage = (progress: number, total = 100) => {
  const percentage = (progress / total) * 100;
  return Math.min(Math.max(percentage, 0), 100);
};
