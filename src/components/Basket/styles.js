import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    display: "flex",
    flexWrap: "wrap",
    top: "152px",
    left: "135px",
    width: "1180px",
    transition: "all 0.3s ease-in",
    zIndex: 1,
  },

  hideContainer: {
    opacity: "0",
    zIndex: -1,
  },
}));

export default useStyles;
