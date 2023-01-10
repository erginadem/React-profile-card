import ProfileCard from "./components/10-profile-card/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard
        avatar="profile.jpg"
        name="Hilary Johnson"
        location="New York, USA"
        shot="3"
        followers="3"
        following="10"
      />
    </div>
  );
};

export default App;
