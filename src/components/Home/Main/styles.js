import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    position: "absolute",
    width: "1170px",
    height: "1344px",
    left: "135px",
    top: "928px",
  },
  gridTitle: {
    gridColumn: "span 2",
    display: "flex",
    justifyContent: "center",
    height: "122px",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "774px",
  },

  title: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "42px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#780202",
    margin: "0",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  linkTitle: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "53px",
    letterSpacing: "0em",
    textAlign: "center",
  },

  arrow: {
    width: "95px",
    height: "1.8px",
    backgroundColor: "#780202",
    margin: "0px -13px 0px 15px",
  },

  arrowIcon: {
    color: "#780202",
  },
}));
