import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import HeroCard from "../heroes/HeroCard";

const Search = ({ history }) => {
  const heroFilter = [];

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const handleClick = (e) => {
    e.preventDefault();
    const value = document.querySelector("#search").value;
    console.log(value);

    history.push(`?q=${value}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <br />

      <div className="row">
        <div className="col-4">
          <h4>Serch Form</h4>
          <hr />

          <form>
            <input type="text" id="search" className="form-control" />

            <button type="submit" onClick={(e) => handleClick(e)}>
              Search
            </button>
          </form>
        </div>
        <div className="col-8">
          <h4>Resultados</h4>
          <hr />

          {heroFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
