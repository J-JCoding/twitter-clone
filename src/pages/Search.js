import { useEffect } from "react";

const Search = (props) => {
  useEffect(() => {
    props.setPage("Search");
  }, []);

  return <h1 style={{ color: "white" }}>Search page!</h1>;
};

export default Search;
