import { IUserResponse } from "../../utils/types";
import { useAuth } from "../../contexts/auth";

interface IProfile {
  user: IUserResponse | null;
}

const Profile = ({ user }: IProfile) => {
  const { Logout } = useAuth();
  return (
    <>
      <div className="profile">
        <div className="side-nav">
          <ul>
            <li>Meu Perfil</li>
            <li>Amigos</li>
            <li></li>
            <li onClick={Logout}>Sair</li>
          </ul>
        </div>
        <div className="content">
          <h3>{user?.name}</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
