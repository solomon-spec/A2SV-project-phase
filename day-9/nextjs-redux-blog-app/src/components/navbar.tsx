// Import the Link component from Next.js
import Link from "next/link";

// Define the Navbar component
export default function Navbar() {
    return (
        // Navigation bar container with flex layout and styling
        <nav className="p-4 mb-8 flex justify-between items-center bg-slate-50">
            {/* Logo */}
            <div className="text-3xl font-bold" id='data-logo'>Logo</div>

            {/* List of navigation links */}
            <ul className="flex justify-around space-x-12">
                <li><Link href="/">Home</Link></li> {/* Home link */}
                <li><Link href="/blogs">All blogs</Link></li> {/* All blogs link */}
                <li><Link href="/blogs/new">Create new blog</Link></li> {/* Create new blog link */}
                <li>Hello world!</li> {/* Text content (e.g., a placeholder) */}
            </ul>

            {/* Buttons for login and signup */}
            <div className="space-x-6">
                <button className="py-2 px-6 bg-slate-100 rounded-full">Login</button>
                <button className="py-2 px-6 bg-slate-100 rounded-full">Signup</button>
            </div>
        </nav>
    );
}
