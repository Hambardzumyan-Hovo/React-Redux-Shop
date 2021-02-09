import React from "react";
import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <ul>
        <li>About Us</li>
        <li>Student Discount</li>
        <li>Coupons</li>
      </ul>
      <ul>
        <li>Contact Us</li>
        <li>Customer Service</li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>Order Status</li>
      </ul>
      <ul>
        <li>Call Us: +123 456789</li>
        <li>Hours: Monday-Friday 10:00-21:00</li>
      </ul>
    </div>
  );
};

export default Footer;
