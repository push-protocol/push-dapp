import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useDiscordSession = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const params = new URLSearchParams(location.hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('expires_in', expiresIn);
      }

      // Splitting the url into baseURL+pathname and hashes of the url
      const baseUrl = window.location.href.split('#')[0];
      // Generating a new URL
      const url = new URL(baseUrl);
      //navigating the user to the new URL without reloading the page
      navigate(url, { replace: true });
    }
  }, []);
};
