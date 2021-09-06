import { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ isUserLogged, setIsUserLogged, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User context must be used within an UserProvider");
  }

  return context;
}