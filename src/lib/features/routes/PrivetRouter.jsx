import { useEffect, useState } from "react";
import Error from "../../../pages/error/Error";
import useUserActions from "../../hooks/useUserActions";
import Loading from "../../../components/common/Loading";

export default function PrivetRouter({ children }) {
  const { user } = useUserActions();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    setIsUserLoaded(true);
  }, [user]);

  if (!isUserLoaded) {
    return <Loading />;
  }

  if (user) {
    return <>{children}</>;
  }

  if (!user && isUserLoaded) {
    return <Error />;
  }
}
