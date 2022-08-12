import { useAuth } from "../contexts/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes = () => {
  const { signed, user } = useAuth();
  console.log(signed, user);
  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
