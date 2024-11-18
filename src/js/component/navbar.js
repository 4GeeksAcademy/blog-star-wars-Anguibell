import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {actions, store} = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3">
      <Link to="/" style={{textDecoration: "none"}}>
        <span className="navbar-brand mb-0 h1 fs-1">Star wars</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
			{store.misFavoritos.map((item, index)=> (
			<li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
			))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
