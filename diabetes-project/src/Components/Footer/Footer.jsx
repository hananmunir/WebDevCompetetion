import React from "react";
import "./Footer.css";

import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <section className='footerContainer'>
      <h1 className='footerTitle'>Newsletter</h1>
      <span className='footerDescription'>
        Get timely updateds from your favourite products.
      </span>
      <div className='footerInputContainer'>
        <input type='text' className='footerInput' placeholder='Your email' />
        <button className='footerButton'>
          <SendIcon />
        </button>
      </div>
    </section>
  );
};

export default Footer;
