import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useUserActions from "../../hooks/useUserActions";
import Loading from "../../../components/common/Loading";

export default function PublicRouter({ children }) {
  const { user, loading } = useUserActions();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsUserLoaded(true);
    }
  }, [loading]);

  if (!isUserLoaded) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}
