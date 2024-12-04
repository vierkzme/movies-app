export default function MovieCard({ title, imageUrl }) {
  const placeholderImage = "/placeholder.svg?height=400&width=300";

  const handleImageError = (event) => {
    event.target.src = placeholderImage;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl !== "N/A" ? imageUrl : placeholderImage}
        alt={title}
        className="w-full h-64 object-cover"
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </div>
    </div>
  );
}
