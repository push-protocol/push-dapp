import { useState, useEffect } from 'react';

export const useDateExpiry = (expiryDate: string | Date) => {
  const [hasExpired, setHasExpired] = useState<boolean>(new Date(expiryDate) < new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHasExpired(new Date(expiryDate) < new Date());
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [expiryDate]);

  return hasExpired;
};
