import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  bestSellers: {
    position: "absolute",
    width: "1180px",
    height: "611px",
    left: "125px",
    top: "2392px",
  },

  title: {
    fontFamily: "MADE Canvas",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "53px",
    letterSpacing: "0em",
    textAlign: "center",
    color: " #780202",
  },

  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },

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
  },

  info: {
    width: "248px",
    height: "117px",
    backgroundColor: "#EEEEEE",
    marginTop: "-22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
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

  seeMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "0px 20px",
    width: "99px",
    height: "31px",
    cursor: "pointer",
  },

  seeMoreText: {
    margin: "0 0 15px 0",
  },

  arrwCnt: {
    display: "flex",
    alignItems: "center",
    margin: "-20px 10px 0px -15px",
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
