import React from "react";
import { useEffect, useContext } from "react";
import { Context } from '../store/appContext'
import CardPlanets from "../component/cardPlanets";

const Planets = () => {

    const {actions, store} = useContext(Context)

    useEffect(()=> {
        actions.loadPlanets()
    }, [])

    return (
        <div className="mt-5">
            <h1 className="d-flex justify-content-start">Planets</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.planets.map((item, id)=>(
                    <CardPlanets 
                        key={id}
                        id = {id + 1}
                        name = {item.name}
                        img = { id == 0 ? 
                            "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" :
                            "https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"}
                        climate = {item.climate}
                        population = {item.population}
                        diameter = {item.diameter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Planets;