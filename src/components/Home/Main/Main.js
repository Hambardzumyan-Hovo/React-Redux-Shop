import React from "react";
import { useStyles } from "./styles";
import living from "../../../assets/living.png";
import kitchen from "../../../assets/kitchen.png";
import bedroom from "../../../assets/bedroom.png";
import bathroom from "../../../assets/bathroom.png";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";

const Main = ({ innerRef }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.gridTitle}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>High quality home decor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu sagittis feugiat nunc sit est vitae eget.
            Nisl at sed ultrices pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus tellus porta
            ornare nunc libero. Accumsan nisi, ullamcorper non venenatis egestas convallis sed dignissim massa.
          </p>
        </div>
      </div>
      <div className={classes.column} ref={innerRef}>
        <Link to='/products'>
          <div>
            <img src={living} />
            <div className={classes.link}>
              <h1 className={classes.linkTitle}>Living room</h1>
              <div className={classes.arrow}></div>
              <KeyboardArrowRightIcon className={classes.arrowIcon} />
            </div>
          </div>
        </Link>
        <Link to='/products'>
          <div>
            <img src={bedroom} />
            <div className={classes.link}>
              <h1 className={classes.linkTitle}>Bedroom</h1>
              <div className={classes.arrow}></div>
              <KeyboardArrowRightIcon className={classes.arrowIcon} />
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.column}>
        <Link to='/products'>
          <div>
            <img src={kitchen} />
            <div className={classes.link}>
              <h1 className={classes.linkTitle}>Kitchen</h1>
              <div className={classes.arrow}></div>
              <KeyboardArrowRightIcon className={classes.arrowIcon} />
            </div>
          </div>
        </Link>
        <Link to='/products'>
          <div>
            <img src={bathroom} />
            <div className={classes.link}>
              <h1 className={classes.linkTitle}>Bathroom</h1>
              <div className={classes.arrow}></div>
              <KeyboardArrowRightIcon className={classes.arrowIcon} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
