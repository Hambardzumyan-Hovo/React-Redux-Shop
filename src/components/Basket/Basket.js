import React, { useState } from "react";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";
import Card from "./Card/Card";
import useStyles from "./styles";

const Basket = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const [itemToBuy, setItemToBuy] = useState({});
  const basket = useSelector(state => state.basket);

  return (
    <>
      <div className={!menu ? classes.container : `${classes.container} ${classes.hideContainer}`}>
        {basket.length > 0 ? (
          basket.map((item, i) => {
            return (
              <BasketItem
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                menu={menu}
                setMenu={setMenu}
                setItemToBuy={setItemToBuy}
              />
            );
          })
        ) : (
          <h2>Your Basket is Empty</h2>
        )}
      </div>

      <Card menu={menu} setMenu={setMenu} itemToBuy={itemToBuy} />
    </>
  );
};

export default Basket;
