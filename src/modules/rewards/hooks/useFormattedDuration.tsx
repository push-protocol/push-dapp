import { usePushStakingStats } from 'common';
import { useState, useEffect, useCallback } from 'react';

export const useFormattedDuration = () => {
  const [formattedDuration, setFormattedDuration] = useState<number | null>(null);
  const { poolStats } = usePushStakingStats();
  const [epochEndTime, setEpochEndTime] = useState<number>();

  const calculateEpochEndDuration = useCallback(() => {
    const epochEndSeconds = poolStats?.epochEndTime;
    const epochEndTimeStamp = new Date().getTime() + (epochEndSeconds || 0) * 1000;
    setEpochEndTime(epochEndTimeStamp);
  }, [poolStats]);

  const getFormattedDuration = () => {
    if (poolStats?.epochEndTimestamp) {
      const now = new Date().getTime();
      const timeRemaining = (epochEndTime as number) - now;

      // plus 7 day rest period
      const day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + 7;

      setFormattedDuration(day);
    }
  };

  useEffect(() => {
    if (poolStats) {
      calculateEpochEndDuration();
    }
  }, [poolStats, calculateEpochEndDuration]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getFormattedDuration();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [getFormattedDuration]);

  return { formattedDuration };
};
