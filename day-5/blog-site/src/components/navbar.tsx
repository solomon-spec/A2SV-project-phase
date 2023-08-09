import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="p-4 mb-8 flex justify-between items-center bg-slate-50">
            <div className="text-3xl font-bold">Logo</div>
            <ul className="flex justify-around space-x-12">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blogs">All blogs</Link></li>
                <li><Link href="/blogs/new">Create new blog</Link></li>
                <li>Hello world!</li>
            </ul>
            <div className="space-x-6">
                <button className="py-2 px-6 bg-slate-100 rounded-full">Login</button>
                <button className="py-2 px-6 bg-slate-100 rounded-full">Signup</button>
            </div>
        </nav>
    )
}