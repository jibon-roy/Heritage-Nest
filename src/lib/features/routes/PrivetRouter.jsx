import Error from "../../../pages/error/Error";
import useUserActions from "../../hooks/useUserActions";

export default function PrivetRouter({ children }) {
  const { user } = useUserActions();

  if (user) {
    return <>{children}</>;
  } else {
    return <Error />;
  }
}
