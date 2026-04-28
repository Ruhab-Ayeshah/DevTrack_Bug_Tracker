import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="flex items-center gap-16 px-6 py-2 bg-slate-900 border-b border-gray-800 text-md">

            <div>
                <p className="font-bold text-cyan-400 text-lg">DevTrack</p>
            </div>

            <div className="flex gap-8">
                <Link to="#" className=" text-gray-300 hover:text-white transition">Features</Link>
                <Link to="#" className=" text-gray-300 hover:text-white transition">Roles</Link>
                <Link to="#" className=" text-gray-300 hover:text-white transition">Workflow</Link>
                <Link to="#" className=" text-gray-300 hover:text-white transition">Pricing</Link>
            </div>

            <div className="flex gap-3 items-center ml-auto">
                <Link to="/signin" className=" text-gray-300 hover:text-white transition px-3 py-1">Sign In</Link>
                <Link to="/register" className=" bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-lg text-white transition">Get Started</Link>
            </div>

        </div>
    )
}

export default Navbar