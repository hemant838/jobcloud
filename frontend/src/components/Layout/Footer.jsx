import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Hemant.</div>
      <div>
        <Link to={"https://www.facebook.com/hemant.pandit.56617/"} target="_blank">
          <FaFacebookF />
        </Link>
        
        <Link to={"https://www.linkedin.com/in/hemant-kumar-0632822aa/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/just.he_man/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
