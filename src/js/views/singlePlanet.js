import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.loadInfoPlanets(theid);
  }, []);
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3" style={{width: "1000px"}}>
        <div className="row g-0">
          <div className="col-md-4 mt-3 p-3">
            <img src={ theid == 1 ?
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ulxDYLpXJR5KlK_1q6-XmKDgwaZb-M4M6wSaXW20e_w" :
                "https://starwars-visualguide.com/assets/img/planets/" + (theid) + ".jpg"} className="img-fluid rounded-start" alt={store.planet.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{store.planet.name}</h5>
              <p className="card-text">
              rotation period: {store.planet.rotation_period}
              </p>
			  <p className="card-text">
              orbital period: {store.planet.orbital_period}
              </p>
			  <p className="card-text">
              diameter: {store.planet.diameter}
              </p>
			  <p className="card-text">
              climate: {store.planet.climate}
              </p>
			  <p className="card-text">
              gravity: {store.planet.gravity}
              </p>
			  <p className="card-text">
              terrain: {store.planet.terrain}
              </p>
			  <p className="card-text">
              surface water: {store.planet.surface_water}
              </p>
              <p className="card-text">
              population: {store.planet.population}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated: {store.planet.edited}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePlanet.propTypes = {
  match: PropTypes.object,
};
