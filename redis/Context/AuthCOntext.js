import axios from 'axios';
import { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthCOntextProvider = ({ children }) => {
  const [state, setState] = useState('');
  const signup = async (data) => {
    try {
      let x = await axios.post('http://localhost:3000/api/signup', data);
      const { token } = x.data;

      setState(token);
      return token;
    } catch (er) {
      setState('');
      console.log(er.message);
      return state;
    }
  };
  return (
    <AuthContext.Provider value={{ state, setState, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
