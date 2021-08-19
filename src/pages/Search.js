import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-state";

import Trending from "../components/search/Trending";
import FilteredList from "../components/search/FilteredList";

const Search = (props) => {
  const dispatch = useDispatch();
  const inputOpen = useSelector((state) => state.ui.searchInput);

  useEffect(() => {
    dispatch(uiActions.setCurPage("Search"));
  }, [dispatch]);

  return (
    <Fragment>
      {!inputOpen && <Trending />}
      {inputOpen && <FilteredList />}
    </Fragment>
  );
};

export default Search;
