import { BiSearchAlt2 } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import ProfileImage from '../assets/profile.jpg'
export default function Navbar() {
    return (
        <nav className="flex justify-between px-4 py-8 items-center">
            <div className="text-3xl font-bold">ቅምሻ</div>
            <div className="flex items-center space-x-4">
                <BiSearchAlt2 className="text-3xl" />
                <img className=" bg bg-slate-100 w-10 h-10 rounded-full object-cover origin-center" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s' alt="" />
                <GiHamburgerMenu className="text-3xl" />
            </div>
        </nav>
    )
}