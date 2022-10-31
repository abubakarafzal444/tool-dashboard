import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ userId: "", setUserId: () => {} });
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  const obj = {
    userId,
    setUserId: (val) => setUserId(val),
  };

  return <Provider value={obj}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
