import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.loadInfoCharacters(theid);
  }, []);
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3" style={{width: "800px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (theid) + ".jpg"} className="img-fluid rounded-start" alt={store.person.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{store.person.name}</h5>
              <p className="card-text">
                birthyear: {store.person.birth_year}
              </p>
			  <p className="card-text">
                eye color: {store.person.eye_color}
              </p>
			  <p className="card-text">
                gender: {store.person.gender}
              </p>
			  <p className="card-text">
                hair color: {store.person.hair_color				}
              </p>
			  <p className="card-text">
                height: {store.person.height}
              </p>
			  <p className="card-text">
                mass: {store.person.mass}
              </p>
			  <p className="card-text">
                skin color: {store.person.skin_color}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated: {store.person.edited}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
