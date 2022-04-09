import React, { useState, useContext } from "react";
import { Input } from "antd";
import { SearchContext } from "../../../../context";
import { API_URL, API_KEY } from "../../../Config";
const { Search } = Input;

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const { setSearchedShows } = useContext(SearchContext);

  function fetchTvShow(e) {
    //e.preventDefault();

    const endpoint =
      query &&
      `${API_URL}search/tv/?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`;

    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setSearchedShows(result.results);
      });

    setQuery("");
  }

  return (
    <Search
      placeholder="Search a tv show"
      enterButton
      onChange={(e) => setQuery(e.target.value)}
      onSearch={fetchTvShow}
      value={query}
    />
  );
};

export default SearchBar;
