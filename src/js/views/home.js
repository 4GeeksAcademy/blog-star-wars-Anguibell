import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "./characters";
import Planets from "./planets";

export const Home = () => (
	<div className="text-center m-5">
		<Characters/>
		<Planets/>
	</div>
);
