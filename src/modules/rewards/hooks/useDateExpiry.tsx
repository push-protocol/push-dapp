import { useState, useEffect } from 'react';

export const useDateExpiry = (expiryDate: string | Date) => {
  const [hasExpired, setHasExpired] = useState<boolean>(new Date(expiryDate) < new Date());

  useEffect(() => {
    if (hasExpired) return;

    const interval = setInterval(() => {
      if (new Date() >= new Date(expiryDate)) {
        setHasExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hasExpired]);

  return hasExpired;
};
