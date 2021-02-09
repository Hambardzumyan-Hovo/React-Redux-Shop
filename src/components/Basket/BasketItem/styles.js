import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "441px",
    display: "flex",
    width: "580px",
    marginBottom: "20px",
  },

  img: {
    width: "377px",
    height: "441px",
  },

  info: {
    width: "297px",
    height: "144px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: "-100px",
    backgroundColor: "#EEEEEE",
  },

  buyBtn: {
    height: "60px",
    width: "200px",
    bottom: "-30px",
    borderRadius: "0px",
    background: "#780202",
    color: "white",
    marginBottom: "-26px",
    "&:hover": {
      background: "#780202",
      color: "white",
    },
  },

  btnText: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
  },

  itemName: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
    margin: "15 px 0px ",
  },

  itemPrice: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    margin: 0,
    color: "#780202",
  },
}));

export default useStyles;
