import React, { useRef } from "react";
import Heading from "./Heading/Heading";
import Main from "./Main/Main";
import Bestsellers from "./Bestsellers/Bestsellers";
import Footer from "./Footer/Footer";

const Home = () => {
  const innerRef = useRef(null);

  return (
    <div>
      <Heading innerRef={innerRef} />
      <Main innerRef={innerRef} />
      <Bestsellers />
      <Footer />
    </div>
  );
};

export default Home;
