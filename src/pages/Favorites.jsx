import { useEffect, useState } from "react";


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFromFavorites = (wordToRemove) => {
    const updated = favorites.filter((item) => item.word !== wordToRemove);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-pink-50">
      
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">⭐ Favorite Words</h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">You haven't starred any words yet.</p>
        ) : (
          <div className="space-y-4">
            {favorites.map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-4 relative"
              >
                <button
                  onClick={() => removeFromFavorites(entry.word)}
                  className="absolute top-2 right-2 text-sm text-red-400 hover:text-red-600"
                >
                  ❌
                </button>
                <h2 className="text-xl font-semibold text-pink-700 capitalize">
                  {entry.word}
                </h2>

                {entry.meanings?.map((meaning, i) => (
                  <div key={i} className="mt-2">
                    <p className="text-sm italic text-gray-500">
                      {meaning.partOfSpeech}
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {meaning.definitions?.slice(0, 2).map((def, j) => (
                        <li key={j}>{def.definition}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
