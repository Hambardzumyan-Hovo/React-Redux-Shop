import React, { useEffect, useRef } from "react";
import Items from "../Items/Items";
import { useStyles } from "./styles";

import Filter from "./Filter/Filter";

const Products = ({ selects, activeSelect }) => {
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);

  return (
    <div ref={ref}>
      <Filter selects={selects} activeSelect={activeSelect} />
      <div className={classes.items}>
        {activeSelect.products &&
          activeSelect.products.map((item, i) => {
            return <Items name={item.name} key={i} id={item.id} img={item.img} price={item.price} />;
          })}
      </div>
    </div>
  );
};

export default Products;
