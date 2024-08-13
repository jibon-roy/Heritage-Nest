import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useUserActions from "../../hooks/useUserActions";

export default function PublicRouter({ children }) {
  const { user, loading } = useUserActions();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsUserLoaded(true);
    }
  }, [loading]);

  if (!isUserLoaded) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}
