export const style = {
  control: base => ({
    ...base,
    border: 0,
    borderBottom: "1px solid #000000",
    borderRadius: "0px",
    boxShadow: "none",
  }),

  placeholder: base => ({
    ...base,
    color: "#000000",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
  }),

  singleValue: base => ({
    ...base,
    color: "#000000",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
  }),

  menu: base => ({
    ...base,
    backgroundColor: "#780202",
    color: "white",
  }),

  dropdownIndicator: base => ({
    ...base,
    color: "#000000",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

export const activeStyle = {
  ...style,
  dropdownIndicator: base => ({
    ...base,
    color: "#000000",
    transform: "rotate(-90deg)",
  }),
};

export const theme = theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "#500202",
    primary25: "#500202",
    primary: "#500202",
  },
});
