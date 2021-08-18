import TrendingItem from "./TrendingItem";

import classes from "./Trending.module.css";

const Trending = () => {
  return (
    <div className={classes.trending}>
      <h2>Trending stories</h2>
      <div>
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </div>
    </div>
  );
};

export default Trending;
