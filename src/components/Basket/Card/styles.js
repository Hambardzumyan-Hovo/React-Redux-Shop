import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    display: "flex",
    opacity: "0",
    alignItems: "center",
    width: "893px",
    height: "346px",
    left: "274px",
    top: "219px",
    transition: "all 0.3s ease-in",
  },
  showContainer: {
    opacity: "1",
  },
  card: {
    position: "absolute",
    width: "595px",
    height: "346px",
    zIndex: "1",
    background: "#780202",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
  },

  line_1: {
    position: "absolute",
    right: "0",
    border: "0",
    height: "2px",
    width: "295px",
    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 19.77%, #FFFFFF 51.85%)",
  },
  line_2: {
    position: "absolute",
    top: "65px",
    right: "0",
    border: "0",
    height: "2px",
    width: "134px",
    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 19.77%, #FFFFFF 51.85%)",
  },

  cardDetails: {
    width: "565px",
    height: "140.5px",
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridGap: "20px",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
  },
  fullLine: { gridColumn: "span 2" },

  cardRoot: {
    color: "#FFFFFF",
    textAlign: "end",
    fontFamily: "Lato",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0.1em",
    borderBottom: "1px solid #FFFFFF",
    // marginBottom: "20px",
    "&:hover": {
      borderBottom: "1px solid #FFFFFF",
    },
  },

  cardInput: {
    color: "#FFFFFF",
    textAlign: "end",
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },

  line_3: {
    position: "absolute",
    width: "593px",
    top: "300px",
  },

  line_4: {
    position: "absolute",
    top: "312px",
    right: "0",
    border: "0",
    height: "2px",
    width: "593px",
    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 19.77%, #FFFFFF 51.85%)",
  },

  //info buttons
  info: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    width: "469px",
    height: "316px",
    left: "420px",
    background: "#EEEEEE",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    width: "292px",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  itemName: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    textTransform: "capitalize",
    color: "#000000",
  },
  itemPrice: {
    fontFamily: "MADE Canvas",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "28px",
    textTransform: "capitalize",
    color: "#780202",
  },
  acceptBtn: {
    height: "60px",
    width: "200px",
    bottom: "-30px",
    borderRadius: "0px",
    background: "#780202",
    color: "#FFFFFF",
    marginBottom: "-26px",
    "&:hover": {
      background: "#780202",
      color: "#FFFFFF",
    },
  },
  btnText: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));

export default useStyles;
