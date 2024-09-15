// Галерея зображень

import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  if (images.length === 0) {
    return;
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
