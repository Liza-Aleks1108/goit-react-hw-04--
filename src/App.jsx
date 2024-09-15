import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
// import './App.css'

const ACCESS_KEY = "YOUR_ACCESS_KEY";
const BASE_URL = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
