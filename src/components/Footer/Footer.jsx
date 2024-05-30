import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <div className="MA-Footer">
        <div className="MA-Footer-Part-Left container1">
          <div className="MA-Logo-container-footer ">
            <img className="MA-Logo-image" src="./images/logo.svg" alt="logo" />
            <div className=".MA-Logo-description">.agency</div>
          </div>
          <h3 className="MA-Footer-Part-Left-tilte-location">Head Office</h3>
          <p className="MA-Footer-Part-Left-location">
            Syria - Latakia - grh2+hjx 35.5199518
          </p>
          <p>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
        <div className="MA-Footer-Part-Right">
          <div className="MA-footer-col1">
            <span>
              <h4>Sales</h4>
              <p>contact@focal-x.com +963 953 666 056</p>
            </span>

            <span>
              <h4>Public Relations</h4>
              <p>pr@focal-x.com +963 953 666 052</p>
            </span>
          </div>
          <div className="MA-footer-col2">
            <span>
              <h4>Customer Support</h4>
              <p>info@focal-x.com +963 953 666 054</p>
            </span>
            <div>
              <h4>Human Resources</h4>
              <p>hr@focal-x.com</p>
            </div>
          </div>

          <div className="MA-footer-col1">
            <div>
              <h4>Useful Links</h4>
              <p>Clients & Partners</p>
              <p>Check Certificat ID</p>
              <p>Check for employee</p>
              <p>Our Brand ID guidlines</p>
            </div>
          </div>
          <div className="MA-footer-col4">
            <h4>Keep In Touch</h4>
            <div className="MA-Footer-icons">
              <span>
                <FaFacebook
                  className="icone"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              <span>
                <FaSquareInstagram
                  className="icone"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              <span>
                <FaLinkedinIn className="icone" />
              </span>
              <span>
                <SlSocialBehance style={{ width: "25px", height: "25px" }} />
              </span>
              <span>
                <TiSocialTwitter style={{ width: "25px", height: "25px" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
