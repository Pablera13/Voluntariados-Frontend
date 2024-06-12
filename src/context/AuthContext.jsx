import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from 'jwt-decode'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null); // Initialize user to null

  const setToken = (newToken, callback) => {
    setToken_(newToken);
    if (callback) {
      callback(); // Call the callback function after setting token
    }
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token',token);
      const user = jwtDecode(localStorage.getItem('token'))
      setUser(user);
      
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }, [token]);

  // Access user data conditionally
  const isUserLoaded = user !== null;

  // Provide context value
  const contextValue = useMemo(
    () => ({ token,  user, isUserLoaded, setToken }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;