import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "1170px",
    height: "62px",
    left: "135px",
    top: "30px",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  items: {
    display: "flex",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
  title: {
    margin: "0px 10px",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    cursor: "pointer",
    color: "#141415",
  },
  activeTitle: {
    // margin: "0px 10px",
    // fontSize: "24px",
    // fontStyle: "normal",
    // fontWeight: 400,
    // lineHeight: "28px",
    // letterSpacing: "0em",
    // textAlign: "left",
    // cursor: "pointer",
    color: "#780202",
  },
  icon: {
    cursor: "pointer",
    margin: "0px 5px",
    color: "#141415",
  },
  active: {
    // cursor: "pointer",
    // margin: "0px 5px",
    color: "#780202",
  },
  itemCount: {
    minWidth: "15px",
    height: "15px",
    width: "15px",
    fontSize: "0.7rem",
    left: "13px",
    color: "white",
    backgroundColor: "#780202",
  },
}));