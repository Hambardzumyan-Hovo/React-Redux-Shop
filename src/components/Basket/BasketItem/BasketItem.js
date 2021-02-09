import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const BasketItem = ({ id, price, name, img, setItemToBuy, setMenu }) => {
  const classes = useStyles();

  const handleClick = () => {
    setItemToBuy({ id, price, name });
    setMenu(true);
  };

  return (
    <div className={classes.container}>
      <img src={img} alt='' className={classes.img} />
      <div className={classes.info}>
        <h3 className={classes.itemName}>{name}</h3>
        <h3 className={classes.itemPrice}>${price}</h3>
        <Button className={classes.buyBtn} onClick={handleClick}>
          <h6 className={classes.btnText}>Buy Now</h6>
        </Button>
      </div>
    </div>
  );
};

export default BasketItem;
