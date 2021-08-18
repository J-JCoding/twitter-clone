import { Fragment } from "react";
import classes from "./TrendingItem.module.css";
import newsImg from "../../img/stock-news.jpg";

const TrendingItem = () => {
  return (
    <Fragment>
      <article className={classes.article}>
        <div>
          <h3>
            The New York Times<span> • This morning</span>
          </h3>
          <p>
            How much money a single person needs to earn to get by in every US
            state
          </p>
        </div>
        {/* img later */}
      </article>

      {/* Fake data to see a more detailed look. Will be deleted once we get data from an api */}
      <article className={classes.article}>
        <div>
          <h3>
            Politico<span> • 3hrs ago</span>
          </h3>
          <p>
            Colorado River: First-ever shortage declared amid record US drought
          </p>
        </div>
        <div className={classes.container}>
          <img src={newsImg} />
        </div>
      </article>
      <article className={classes.article}>
        <div>
          <h3>
            ESPN<span> • Monday</span>
          </h3>
          <p>Stock up, stock down from the Vikings' loss to the Broncos</p>
        </div>
      </article>
    </Fragment>
  );
};

export default TrendingItem;

// FUTURE IMPLEMENTATIONS
// 1. Set up news api and extract data into component
// 2. Each article in the future will need to be a link so that
// when user clicks link it will redirect to the source
