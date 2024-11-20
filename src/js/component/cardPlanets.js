import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = ({id, name, img, climate, population, diameter}) => {
  const { actions, store } = useContext(Context);
  const isFavorite = store.misFavoritos.includes(name)

  return (
    <div>
      <div className="card" style={{width: "18rem", margin: "10px"}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            climate: {climate}
          </p>
          <p className="card-text">
            population: {population}
          </p>
          <p className="card-text">
            diameter: {diameter}
          </p>
          <Link to={`/singlePlanet/${id}`} className="btn btn-primary float-start">
            Learn more!
          </Link>
          <button className="btn btn-outline-warning float-end" onClick={()=>actions.favoritos(name)}>
            <i className={`fa fa-heart ${isFavorite? "text-dark": "text-warning"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;