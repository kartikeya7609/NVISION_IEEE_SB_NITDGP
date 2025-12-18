import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utilities/googleAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from "../images/ieee-logo-light.png";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { Instagram, Linkedin, Facebook, Globe, MessageCircle, LinkIcon } from "lucide-react";
import { WhatsApp } from "@mui/icons-material";

const socialLinks = [
  {
    icon: <WhatsApp size={20} />,
    href: "https://chat.whatsapp.com/DS956oN4CHII3JdjJsFOaV",
    label: "WhatsApp"
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/ieeesb_nitdgp",
    label: "Instagram"
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://in.linkedin.com/company/ieeesbnitdgp",
    label: "LinkedIn"
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/nitdgpieeesociety/",
    label: "Facebook"
  },
  {
    icon: <Globe size={20} />,
    href: "https://ieee-sb-nitdgp.vercel.app/",
    label: "Website"
  }
];

const Landing = () => {
  const [signed_in, setSigned_in] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSigned_in(true);
    } else {
      setSigned_in(false);
    }
  });

  let navigate = useNavigate();
  const redirect = () => {
    let path = localStorage.getItem("Submitted") === "1" ? "/success" : "/reg";
    navigate(path);
  };

  return (
    <>
      <section id="home">
        <nav class="navbar">
          <div class="nav-container">
            <a
              class="navbar-brand"
              href="https://ieee-sb-nitdgp.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo} alt="" width="100" height="50" />
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row head">
                <h1 className="heading">
                  IEEE SB NIT DURGAPUR
                  <br />
                  AUDITIONS
                </h1>
              </div>
              <div className="desc">
                <p>
                  IEEE is the world's largest professional association dedicated
                  to advancing technological innovation and excellence for the
                  benefit of humanity.
                  <a
                    href="https://www.ieee.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {" "}
                    <LinkIcon size={18} color="cyan" />
                  </a>
                  <br />
                  <br />
                  The IEEE Student Branch , NIT Durgapur is a society of
                  enthusiasts aimed at promoting research-related activities in
                  the campus.
                  <a
                    href="https://ieee-sb-nitdgp.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {" "}
                    <LinkIcon size={18} color="cyan" />
                  </a>
                </p>
              </div>
              <div className="stat-box">
                <div className="d-flex">
                  <div className="stat">
                    <p>50+ Members</p>
                  </div>
                  <div className="stat">
                    <p>30+ Events</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="stat">
                    <p>500+ Registrations</p>
                  </div>
                </div>
              </div>
              {signed_in ? (
                redirect()
              ) : (
                <button
                  id="sign-in-btn"
                  onClick={() => {
                    Auth();
                  }}
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <div>© {new Date().getFullYear()} IEEE SB NITDGP. All rights reserved.</div>
          </div>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Landing;
