// Import necessary React components/icons
import { BiSearchAlt2 } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

// Define the functional component named "Navbar"
export default function Navbar() {
    return (
        // Navigation bar container with styling classes
        <nav className="flex justify-between px-4 py-8 items-center">
            {/* Site logo or title */}
            <div className="text-3xl font-bold">ቅምሻ</div>

            {/* Navigation links */}
            <div className='hidden sm:flex'>
                <ul>
                    <li className="inline-block px-4 py-2 rounded-md hover:underline transition-all"><a href='/'>Home</a></li>
                    <li className="inline-block px-4 py-2 rounded-md hover:underline transition-all">About</li>
                    <li className="inline-block px-4 py-2 rounded-md hover:underline transition-all">Contact</li>
                </ul>
            </div>

            {/* Icons and user profile */}
            <div className="flex items-center space-x-4">
                {/* Search icon */}
                <BiSearchAlt2 className="text-3xl" />

                {/* User profile image */}
                <img className="bg bg-slate-100 w-10 h-10 rounded-full object-cover origin-center" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s' alt="" />

                {/* Menu icon for responsive display */}
                <GiHamburgerMenu className="text-3xl sm:hidden" />
            </div>
        </nav>
    );
}
