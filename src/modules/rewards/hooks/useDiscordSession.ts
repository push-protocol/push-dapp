import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useDiscordSession = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const params = new URLSearchParams(location.hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('expires_in', expiresIn);
      }

      window.history.replaceState({}, '', location.pathname);
    }
  }, []);
};
