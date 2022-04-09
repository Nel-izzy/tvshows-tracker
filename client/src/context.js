import React, { useState, createContext } from "react";
import App from "./components/App";

export const SearchContext = createContext();

const MainContext = () => {
  const [searchedShows, setSearchedShows] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        setSearchedShows,
        searchedShows,
      }}
    >
      <App />
    </SearchContext.Provider>
  );
};

export default MainContext;
