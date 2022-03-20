import react from "react";

const context = react.createContext(null);

const useAuthProvider = () => {
  const [user, setUser] = react.useState({ name: "aasdf" });

  return {
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const value = useAuthProvider();

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useAuth = () => react.useContext(context);
