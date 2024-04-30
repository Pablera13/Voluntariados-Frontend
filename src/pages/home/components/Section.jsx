import React from "react";
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Section() {
  return (
    <div className="row m-5">
      <div className="col">
        <div className="card mb-5 pb-3 px-3">
          <i
            class="fa fa-recycle fa-5x icon-section d-flex justify-content-center align-items-center"
            aria-hidden="true"
          ></i>

          <h4>Voluntariados en Costa Rica</h4>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bitlonger. lore This
            is a wider card with supporting text below as anatural
          </p>
          <Link to={'/volunteering'}>
          <button className="acceptButton">Ser parte</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card card-home pb-3 px-3">
          <i
            class="fa fa-address-book fa-5x icon-section d-flex justify-content-center align-items-center"
            aria-hidden="true"
          ></i>
          <h4>Actividades de las empresas</h4>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bitlonger. lore This
            is a wider card with supporting text below as anatural
          </p>
          <Link to={'/activities'}>
          <button className="acceptButton">Ser parte</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
