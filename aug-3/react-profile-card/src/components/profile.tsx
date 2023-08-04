
interface Props {
    profileImage: string;
    name: string;
    team: string;
    discription: string;
    isAdmin: boolean;
}
const Profile = ({ profileImage, name, team, discription, isAdmin }: Props) => {
    return (
        <div className="bg-slate-100 rounded-xl shadow-xl p-12 m-8 max-w-md text-center border-2 border-slate-300 relative">
            {isAdmin && <p className="text-red-500 bg-slate-200 rounded-full p-1 px-8 m-4 inline-block absolute top-1 right-1 border-2 border-slate-300">Admin</p>}
            <img className="rounded-full w-[70%] mx-auto" src={profileImage} />
            <h3 className="text-xl font-bold">{name}</h3>
            <p>{team}</p>
            <p>{discription}</p>
        </div>
    )
}

export default Profile;