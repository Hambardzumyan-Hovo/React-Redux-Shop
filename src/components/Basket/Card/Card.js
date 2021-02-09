import { Button, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/basketReducer";
import useStyles from "./styles";
import mc from "../../../assets/mc.png";
import NumberFormat from "react-number-format";
import { useForm } from "react-hook-form";

const Card = ({ menu, setMenu, itemToBuy }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    let id = itemToBuy.id;
    if (data) {
      dispatch(deleteItem(id));
      setMenu(false);
    }
  };

  const creditCardFormat = props => {
    const { inputRef, ...other } = props;
    return <NumberFormat {...other} getInputRef={inputRef} format='#### - #### - #### - ####' />;
  };
  const expiryFormat = props => {
    const { inputRef, ...other } = props;
    return <NumberFormat {...other} getInputRef={inputRef} format='## / ##' />;
  };
  const cvcFormat = props => {
    const { inputRef, ...other } = props;
    return <NumberFormat {...other} getInputRef={inputRef} format='####' />;
  };
  const creaditCardInfo = [
    { field: "Card Number", format: creditCardFormat, class: classes.fullLine },
    { field: "Name", class: classes.fullLine },
    { field: "Exp.date", format: expiryFormat },
    { field: "CVC", format: cvcFormat },
  ];
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={!menu ? classes.container : `${classes.container} ${classes.showContainer}`}>
      <div className={classes.card}>
        <img src={mc} />
        <hr className={classes.line_1} />
        <hr className={classes.line_2} />
        <div className={classes.cardDetails}>
          {creaditCardInfo.map((element, i) => {
            return (
              <TextField
                key={i}
                name={element.field}
                inputRef={register}
                required={true}
                classes={{ root: element.class }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <h3>{element.field}</h3>
                    </InputAdornment>
                  ),
                  className: classes.cardRoot,
                  disableUnderline: true,
                  classes: { input: classes.cardInput },
                  inputComponent: element.format,
                }}
              />
            );
          })}
        </div>
        <hr className={classes.line_3} />
        <hr className={classes.line_4} />
      </div>
      <div className={classes.info}>
        <div className={classes.innerContainer}>
          <h3 className={classes.itemName}>{itemToBuy.name}</h3>
          <h3 className={classes.itemPrice}>${itemToBuy.price}</h3>
          <Button className={classes.acceptBtn} type='submit'>
            <h6 className={classes.btnText}>Accept</h6>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Card;
