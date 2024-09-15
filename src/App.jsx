import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";

// Unsplash
const ACCESS_KEY = "oRnvDff_v4Fguye2gfRmfu2bAV1azLMWGiVWxPK_ofo";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY,
      },
    });

    return response.data;
  } catch (error) {
    return { results: [], total_pages: 0 };
  }
};

function App() {
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {query && <ImageGallery query={query} openModal={openModal} />}{" "}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
