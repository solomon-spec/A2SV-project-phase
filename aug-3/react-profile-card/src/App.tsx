import Profile from "./components/profile"
import profileimage from "./assets/profile2.jpg"
function App() {
  // data for profile
  const data = {
    name: "Solomon Abate",
    team: "Web team",
    discription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: profileimage,
    isAdmin: true
  }

  // second data for profile
  const data2 = {
    name: "Solomon Abate",
    team: "Web team",
    discription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: profileimage,
    isAdmin: false
  }

  return (
    <div className={`w-full min-h-screen`}>
      <div className="w-full h full backdrop-blur-sm flex flex-wrap">
        {/* profile card */}
        <Profile profileImage={data.profileImage} name={data.name} team={data.team} discription={data.discription} isAdmin={data.isAdmin} />
        <Profile profileImage={data2.profileImage} name={data2.name} team={data2.team} discription={data2.discription} isAdmin={data2.isAdmin} />
        <Profile profileImage={data.profileImage} name={data.name} team={data.team} discription={data.discription} isAdmin={data.isAdmin} />
        <Profile profileImage={data2.profileImage} name={data2.name} team={data2.team} discription={data2.discription} isAdmin={data2.isAdmin} />
        <Profile profileImage={data.profileImage} name={data.name} team={data.team} discription={data.discription} isAdmin={data.isAdmin} />
        <Profile profileImage={data2.profileImage} name={data2.name} team={data2.team} discription={data2.discription} isAdmin={data2.isAdmin} />
      </div>
    </div>
  )
}

export default App;
