import { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const API_KEY = "ae59de83";
    const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`;
    try {
      const response = await fetch(apiURL);
      const respJSON = await response.json();
      if (respJSON.Response === "False") throw new Error(respJSON.Error);

      const movies = respJSON.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        imageUrl: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.svg",
      }));

      dispatch({ type: "INSERT_MOVIES", movies });
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          H8 Movies
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search movies..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="p-2 rounded-md"
          />
          <button
            onClick={fetchMovies}
            className="bg-black text-white p-2 rounded-md"
          >
            <Search size={20} />
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <input
            type="text"
            placeholder="Search movies..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="p-2 rounded-md w-full mb-2"
          />
          <button
            onClick={fetchMovies}
            className="bg-black text-white p-2 rounded-md w-full"
          >
            Search
          </button>
        </div>
      )}
    </nav>
  );
}
