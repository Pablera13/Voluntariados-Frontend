import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HorizontalImage({image, title, text, textButton, linkButton}) {
  return (
    <MDBCard style={{ maxWidth: "840px" }}>
      <MDBRow className="g-0">
        <MDBCol md="5">
          <MDBCardImage
            src={image}
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="7">
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
              {text}
            </MDBCardText>

            <div className="d-flex justify-content-end">
              <Link to={linkButton}>
                <button className="acceptButton">{textButton}</button>
              </Link>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
