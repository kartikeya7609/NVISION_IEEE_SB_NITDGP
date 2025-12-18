import React from "react";
import "./Footer.css";
import Logo from "../../images/sblogowhite.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top-segment">
        <div className="left-segment">
          <img id="logo" src={Logo} alt="logo" />
          <p className="text" id="desc">
            The IEEE Student Branch, NIT Durgapur is a society of enthusiasts
            aimed at promoting research-related activities in the campus.
            Comprising of bright researchers, developers, speakers, and other
            contributors we are a society that welcomes in the era of better
            research prospects, on the campus.
          </p>
        </div>
        <div className="right-segment">
          <p className="text" style={{ fontSize: '25px' ,fontWeight: "bold" }}>
            Contacts:-
          </p>
          <p className="text">Arindam: 6295078414</p>
          <p className="text">Vamsi: 9490387526 </p>
        </div>
      </div>
      <div className="bottom-segment">
        <p className="text">© IEEE Student Branch NIT Durgapur</p>
      </div>
    </div>
  );
}

export default Footer;
