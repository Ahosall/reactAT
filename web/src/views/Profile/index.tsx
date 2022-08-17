import "./style.css";

const Profile = (props: any) => {
  return (
    <>
      <h1>Hello {props.user.name}</h1>
    </>
  );
};

export default Profile;
