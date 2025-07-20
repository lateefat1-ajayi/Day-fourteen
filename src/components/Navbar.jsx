import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-pink-600 tracking-tight">
        Booké
      </Link>
      <div className="space-x-4 text-sm sm:text-base">
        <Link to="/search" className="text-gray-700 hover:text-pink-600 transition">
          Search
        </Link>
        <Link to="/favorites" className="text-gray-700 hover:text-pink-600 transition">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
