import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "278px",
    height: "422px",
  },

  img: {
    width: "278px",
    height: "325px",
    transition: "all 0.2s ease-in",
  },
  imgHovered: {
    width: "296px",
    height: "346px",
    transition: "all 0.2s ease-in",
  },

  info: {
    position: "absolute",
    top: "300px",
    width: "248px",
    height: "117px",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    transition: "all 0.2s ease-in",
  },

  infoHovered: {
    position: "absolute",
    top: "345px",
    width: "248px",
    height: "117px",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    transition: "all 0.2s ease-in",
  },

  shade: {
    position: "absolute",
    top: "-300px",
    zIndex: "-1",
    width: "248px",
    height: "22px",
    backgroundColor: "#EEEEEE",
    transition: "all 0.2s ease-in",
  },

  shadehovered: {
    position: "absolute",
    top: "-367px",
    width: "248px",
    height: "22px",
    zIndex: "-1",
    backgroundColor: "#EEEEEE",
    transition: "all 0.2s ease-in",
  },

  itemName: {
    fontFamily: "MADE Canvas",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
    margin: 0,
  },
  itemPrice: {
    fontFamily: "MADE Canvas",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    margin: 0,
    color: "#780202",
  },
  addBtn: {
    height: "37px",
    width: "119px",
    left: "0px",
    top: "0px",
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
    fontFamily: "MADE Canvas",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0em",
    textAlign: "left",
    margin: 0,
  },
  icon: {
    width: "16px",
  },
}));
