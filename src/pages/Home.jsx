import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4">Booké</h1>
        <p className="text-lg text-gray-600 italic mb-6">
          “Look it up. Learn it. Live it.”
        </p>
        <p className="text-md text-gray-500 mb-8">
        Look up words, save your favorites, and improve your vocabulary.
        </p>
        <Link
          to="/search"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 cursor-pointer hover:-translate-y-0.5"
        >
          Start Searching
        </Link>
      </div>
    </div>
  );
};

export default Home;
