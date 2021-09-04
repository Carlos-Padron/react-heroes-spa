import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  characters,
}) => {
  return (
    <div className="card ms-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/${id}.jpg`}
            className="card-img"
            alt="alv"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title"> {superhero} </h5>
            <p className="card-text">{alter_ego}</p>

            {alter_ego !== characters && <p>{characters}</p>}


            <Link to={`./hero/${id}`} >
            Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
