import React from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Items from "../../Items/Items";
import { useSelector } from "react-redux";

const Bestsellers = () => {
  const classes = useStyles();
  const items = useSelector(state => state.products.selects[0].categories[0].products);

  return (
    <div className={classes.bestSellers}>
      <h1 className={classes.title}>Best Sellers</h1>
      <div className={classes.itemContainer}>
        {items.map((item, i) => {
          return <Items id={item.id} name={item.name} img={item.img} price={item.price} key={i} />;
        })}
      </div>
      <Link to='/products'>
        <div className={classes.seeMore}>
          <h4 className={classes.seeMoreText}>see more</h4>
          <div className={classes.arrwCnt}>
            <div className={classes.arrow}></div>
            <KeyboardArrowRightIcon className={classes.arrowIcon} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Bestsellers;
