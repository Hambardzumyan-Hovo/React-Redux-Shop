import { makeStyles } from "@material-ui/core";
import main from "../../../assets/main.png";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "1440px",
    height: "868px",
    left: "0px",
    top: "0px",
    backgroundImage: `url(${main})`,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "74px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#780202",
  },
  button: {
    width: "200px",
    height: "60px",
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#780202",
      boxShadow: "none",
    },
  },
  buttonText: {
    margin: 0,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  arrow: {
    height: "50px",
    marginTop: "20px",
    marginBottom: "-15px",
    borderRight: "2px solid #780202",
  },
  arrowDown: {
    color: "#780202",
  },
}));
