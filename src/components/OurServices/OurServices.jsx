import React from "react";
import "./OurServices.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const OurServices = () => {
  return (
    <>
      <div className="MA-section-our-services">
        <h2 className="MA-section-our-services title">Our Services</h2>
        <div className="MA-section-our-services-cards">
          <div className="MA-section-our-services-card1">
            <Card style={{ width: "100%" ,backgroundColor:"black" }} >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Branding</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h2>this tile h2</h2>
                <p>1.ddsadsa</p>
                <p>2.dsadsa</p>
                <p>3.dsadsa</p>
                <p>4.dsadsa</p>
                <p>5.dsadsadas</p>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="MA-section-our-services-card2">

          <Card style={{ width: "100%" }} className="bg-black">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Branding</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h2>this tile h2</h2>
                <p>1.ddsadsa</p>
                <p>2.dsadsa</p>
                <p>3.dsadsa</p>
                <p>4.dsadsa</p>
                <p>5.dsadsadas</p>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;
