import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

export default function App() {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                imageUrl={movie.imageUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No movies found.</p>
        )}
      </main>
    </div>
  );
}
