import { useAuth } from "../contexts/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes = () => {
  const { signed, user } = useAuth();

  return signed ? <OtherRoutes user={user} /> : <SignRoutes />;
};

export default Routes;
