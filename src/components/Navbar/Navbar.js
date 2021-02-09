import { AppBar, Badge, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const basket = useSelector(state => state.basket);

  return (
    <AppBar className={classes.root}>
      <div className={classes.logo}>
        <Typography>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </Typography>
      </div>
      <div className={classes.items}>
        <h2
          className={
            location.pathname.slice(1) === "products" ? `${classes.activeTitle} ${classes.title}` : classes.title
          }>
          <Link to='/products'>Furniture</Link>
        </h2>
        <h2 className={classes.title}>Lighting</h2>
        <h2 className={classes.title}>Decor</h2>
        <h2 className={classes.title}>Tablewear</h2>
        <div className={classes.icons}>
          <Link to='/basket'>
            <Badge badgeContent={basket.length} classes={{ badge: classes.itemCount }}>
              <ShoppingCartOutlinedIcon
                className={
                  location.pathname.slice(1) === "basket" ? `${classes.icon} ${classes.active} ` : classes.icon
                }
              />
            </Badge>
          </Link>
          <SearchIcon className={classes.icon} />
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
