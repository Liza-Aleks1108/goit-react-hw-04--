import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

// Unsplash
const ACCESS_KEY = "oRnvDff_v4Fguye2gfRmfu2bAV1azLMWGiVWxPK_ofo";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1, perPage = 20) => {
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

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {query && <ImageGallery query={query} />}
    </>
  );
}

export default App;
