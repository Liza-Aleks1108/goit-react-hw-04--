// Хедер з формою пошуку

// Toaster
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// Створення компонента SearchBar
function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}

export default SearchBar;
