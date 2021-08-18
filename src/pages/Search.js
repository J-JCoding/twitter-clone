import Trending from "../components/search/Trending";
import { useEffect } from "react";

const Search = (props) => {
  useEffect(() => {
    props.setPage("Search");
  }, []);

  return <Trending />;
};

export default Search;
