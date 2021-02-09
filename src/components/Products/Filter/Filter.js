import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select, { components } from "react-select";
import { setActiveSelect } from "../../../redux/productsReducer";
import { activeStyle, style, theme } from "./selectStyle";
import { useStyles } from "./styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Filter = ({ selects, activeSelect }) => {
  const classes = useStyles();
  const [selectName, setSelectName] = useState();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = e => {
    setSelectName(e.target.id);
    setIsActive(true);
  };

  const handleChange = e => {
    let value = e.value;
    dispatch(setActiveSelect(selectName, value));
    setIsActive(false);
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDropDownIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className={classes.filter}>
      {selects.map((select, i) => {
        console.log(select.categories);
        return (
          <Select
            key={i}
            inputId={select.name}
            options={select.categories}
            controlShouldRenderValue={false}
            className={classes.select}
            styles={activeSelect.selectName === select.name && !isActive ? activeStyle : style}
            placeholder={select.name}
            theme={theme}
            components={{ DropdownIndicator }}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => setIsActive(false)}
          />
        );
      })}
    </div>
  );
};

export default Filter;
