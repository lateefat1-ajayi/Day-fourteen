// import { useState, useEffect } from "react";
// import axios from "axios";

// function Search() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState(null);
//   const [favorites, setFavorites] = useState(() => {
//     const saved = localStorage.getItem("favorites");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
//     setHistory(storedHistory);
//   }, []);

//   const handleSearch = async (manualTerm) => {
//     const term = manualTerm || searchTerm;
//     if (!term.trim()) return;

//     try {
//       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
//       setResults(response.data[0]);
//       updateSearchHistory(term);
//     } catch (error) {
//       setResults({ error: "Word not found." });
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSearch();
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setResults(null);
//   };

//   const playAudio = () => {
//     const audioObj = results?.phonetics?.find((p) => p.audio);
//     const audioUrl = audioObj?.audio;

//     if (audioUrl) {
//       const audio = new Audio(audioUrl);
//       audio.play().catch((err) => console.error("Audio play error:", err));
//     } else {
//       alert("No audio available for this word.");
//     }
//   };

//   const isFavorited = () => favorites.some((word) => word.word === results?.word);

//   const toggleFavorite = () => {
//     if (!results || results.error) return;
//     const updated = isFavorited()
//       ? favorites.filter((w) => w.word !== results.word)
//       : [...favorites, { word: results.word, meanings: results.meanings }];
//     setFavorites(updated);
//     localStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   const updateSearchHistory = (word) => {
//     const newHistory = [word, ...history.filter((item) => item !== word)].slice(0, 5);
//     setHistory(newHistory);
//     localStorage.setItem("searchHistory", JSON.stringify(newHistory));
//   };

//   return (
//     <div className="min-h-screen bg-pink-50">
//       <div className="max-w-xl mx-auto p-4">
//         {/* Search Input + Button */}
//         <div className="flex items-center relative gap-2">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleKeyPress}
//             placeholder="Search for a word..."
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//           {searchTerm && (
//             <button
//               onClick={clearSearch}
//               className="absolute right-25 text-red-400 hover:text-red-500 cursor-pointer"
//             >
//               X
//             </button>
//           )}
//           <button
//             onClick={() => handleSearch()}
//             className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition cursor-pointer"
//           >
//             Search
//           </button>
//         </div>

//         {/* Search History */}
//         {history.length > 0 && (
//           <div className="mt-4 bg-gray-100 p-3 rounded-md shadow-sm">
//             <div className="flex justify-between items-center mb-2">
//               <p className="text-sm font-medium text-gray-700">Recent Searches:</p>
//               <button
//                 onClick={() => {
//                   setHistory([]);
//                   localStorage.removeItem("searchHistory");
//                 }}
//                 className="text-xs text-red-500 hover:underline cursor-pointer"
//               >
//                 Clear All
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {history.map((item, idx) => (
//                 <button
//                   key={idx}
//                   className="text-sm bg-white px-3 py-1 rounded-md border border-gray-300 hover:bg-pink-100 text-gray-700 cursor-pointer"
//                   onClick={() => {
//                     setSearchTerm(item);
//                     handleSearch(item);
//                   }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Results */}
//         {results && !results.error && (
//           <div className="bg-white shadow-md rounded-md p-4 mt-6 relative">
//             <button
//               onClick={() => setResults(null)}
//               className="absolute top-2 right-2 text-sm bg-red-400 p-1 rounded text-white hover:bg-red-500 cursor-pointer"
//             >
//               cancel
//             </button>

//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-bold text-pink-700 capitalize">{results.word}</h2>
//               <div className="flex items-center gap-3 m-5">
//                 <button onClick={playAudio} title="Play pronunciation" className="text-gray-600 hover:text-pink-500 cursor-pointer text-lg">
//                   🔊
//                 </button>
//                 <button onClick={toggleFavorite} title="Add to favorites" className="text-yellow-500 text-xl cursor-pointer">
//                   {isFavorited() ? "⭐" : "☆"}
//                 </button>
//               </div>
//             </div>

//             {results.meanings?.map((meaning, idx) => (
//               <div key={idx} className="mb-3">
//                 <p className="italic text-gray-500">{meaning.partOfSpeech}</p>
//                 <ul className="list-disc pl-5 text-sm text-gray-700">
//                   {meaning.definitions?.slice(0, 2).map((def, i) => (
//                     <li key={i}>
//                       {def.definition}
//                       {def.synonyms && def.synonyms.length > 0 && (
//                         <p className="text-xs text-pink-500 mt-1">
//                           Synonyms: {def.synonyms.slice(0, 3).join(", ")}
//                         </p>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         )}

//         {results?.error && (
//           <p className="mt-6 text-center text-red-500">{results.error}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Search;
