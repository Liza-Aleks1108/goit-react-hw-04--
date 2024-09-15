function ImageCard({ src, alt, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default ImageCard;
