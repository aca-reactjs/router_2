import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthHook";

export default function ProtectedAuth({ children }) {
  const { user } = useAuth();
  console.log(`🐞 / ProtectedAuth / user`, user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
