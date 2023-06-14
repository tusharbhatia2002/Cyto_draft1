"use client"
import { useEffect } from 'react';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  const WrapperComponent = (props) => {

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const token = localStorage.getItem('token');

          if (!token) {
            // Redirect to the login page if the token is not found
            window.location.href = '/login';
          } else {
            // Validate the token on the server
            const res = await axios.post('/api/validateToken', { token });

            if (res.status === 200) {
              // Token is valid, proceed to the wrapped component
              console.log('Authentication successful!');
            } else {
              // Token is invalid, redirect to the login page
              window.location.href = '/login';
            }
          }
        } catch (error) {
          console.error('Authentication failed:', error);
          // Redirect to the login page on error
          window.location.href = '/login';
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

export default withAuth;

