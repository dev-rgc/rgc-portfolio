import Me from "../assets/images/profile/selfme.jpg";

const Profile = () => {
  return (
    <div className="img-border size-56 rounded-full mb-3">
      <img src={Me} className="size-full rounded-full" />
    </div>
  );
};

export default Profile;
