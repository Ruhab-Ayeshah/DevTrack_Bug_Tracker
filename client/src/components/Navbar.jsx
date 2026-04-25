import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="flex items-center gap-16 px-8 py-4 bg-slate-900 border-b border-gray-800">

            <div>
                <p className="font-bold text-xl text-cyan-400">DevTrack</p>
            </div>

            <div className="flex gap-8">
                <Link to="#" className="text-base text-gray-300 hover:text-white transition">Features</Link>
                <Link to="#" className="text-base text-gray-300 hover:text-white transition">Roles</Link>
                <Link to="#" className="text-base text-gray-300 hover:text-white transition">Workflow</Link>
                <Link to="#" className="text-base text-gray-300 hover:text-white transition">Pricing</Link>
            </div>

            <div className="flex gap-3 items-center ml-auto">
                <Link to="/signin" className="text-base text-gray-300 hover:text-white transition px-4 py-2">Sign In</Link>
                <Link to="/register" className="text-base bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white transition">Get Started</Link>
            </div>

        </div>
    )
}

export default Navbar