import { useEffect, useState } from "react";
import Error from "../../../pages/error/Error";
import useUserActions from "../../hooks/useUserActions";

export default function PrivetRouter({ children }) {
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
    return <>{children}</>;
  } else {
    return <Error />;
  }
}
