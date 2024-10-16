// types
import { AxiosError } from 'axios';

export const isUserNotFound = (error: Error) => {
  if (error instanceof AxiosError && error?.response?.status === 404) {
    return true;
  }
  return false;
};
