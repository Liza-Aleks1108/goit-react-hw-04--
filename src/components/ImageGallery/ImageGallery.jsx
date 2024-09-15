import { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { fetchImages } from "../../App";
import { Audio } from "react-loader-spinner";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      const data = await fetchImages(query);
      setImages(data.results);
      setLoading(false);
    };

    getImages();
  }, [query]);

  if (loading)
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  if (error)
    return (
      <p>
        Oops... Sorry, something went wrong. Try again. Error: {error.message}
      </p>
    );
  if (images.length === 0) return <p>No images found.</p>;

  return (
    <>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description || "Image"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
