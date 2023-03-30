import {  useCallback,useState } from 'react';

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

type UseAsyncOperationResult<T> = {
  loading: boolean;
  error: Error | null;
  executeAsyncFunction: (...args: any[]) => Promise<T>;
};

export const useAsyncOperation = <T>(
  asyncFunction: AsyncFunction<T>
): UseAsyncOperationResult<T> => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const withLoading = useCallback(
    async (fn: AsyncFunction<T>, ...args: any[]): Promise<T> => {
      setLoading(true);
      try {
        const result = await fn(...args);
        setLoading(false);
        return result;
      } catch (err) {
        setLoading(false);
        setError(err);
        throw err;
      }
    },
    []
  );

  const executeAsyncFunction = useCallback(
    async (...args: any[]): Promise<T> => {
      try {
        const result = await withLoading(asyncFunction, ...args);
        return result;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    [asyncFunction, withLoading]
  );


  

  return { loading, error, executeAsyncFunction };
};
