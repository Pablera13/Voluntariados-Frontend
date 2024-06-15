/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from 'jwt-decode'
import {getUserById} from '../services/UserService';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null); 

  const setToken = (newToken, callback) => {
    setToken_(newToken);
    if (callback) {
      callback(); 
    }
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token',token);
      const userPayload = jwtDecode(localStorage.getItem('token'))

      async function UserFetch() {
        const userObject = await getUserById(userPayload.sub)
        setUser(userObject)
      }
      
      UserFetch()
      
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
  }, [token]);

  const isUserLoaded = user !== null;

  const contextValue = useMemo(
    () => ({ token,  user, isUserLoaded, setToken }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;