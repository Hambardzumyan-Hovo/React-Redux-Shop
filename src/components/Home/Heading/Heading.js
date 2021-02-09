import React from "react";
import { useStyles } from "./styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Button } from "@material-ui/core";

const Heading = ({ innerRef }) => {
  const classes = useStyles();
  const handleClick = () => {
    innerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h1 className={classes.title}>Create Your Comfort Zone</h1>
        <Button className={classes.button} variant='contained' onClick={handleClick}>
          <h6 className={classes.buttonText}>Shop now</h6>
        </Button>
        <div className={classes.arrow}></div>
        <KeyboardArrowDownIcon className={classes.arrowDown} />
      </div>
    </div>
  );
};

export default Heading;
