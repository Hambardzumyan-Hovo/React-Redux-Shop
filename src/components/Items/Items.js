import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { addItem } from "../../redux/basketReducer";
import { useDispatch } from "react-redux";

const Items = ({ id, name, img, price }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleHover = () => {
    setHovered(true);
  };
  const handleHoverOff = () => {
    setHovered(false);
  };

  const handleClick = () => {
    const item = { id, name, img, price };
    dispatch(addItem(item));
  };

  return (
    <div className={classes.item} id={id} onMouseEnter={handleHover} onMouseLeave={handleHoverOff}>
      <img src={img} className={!hovered ? classes.img : classes.imgHovered} />

      <div className={!hovered ? classes.info : classes.infoHovered}>
        <div className={!hovered ? classes.shade : classes.shadehovered}></div>
        <h3 className={classes.itemName}>{name}</h3>
        <h3 className={classes.itemPrice}>${price}</h3>
        <Button className={classes.addBtn} onClick={handleClick}>
          <ShoppingCartOutlinedIcon className={classes.icon} />
          <h6 className={classes.btnText}>Add</h6>
        </Button>
      </div>
    </div>
  );
};

export default Items;
