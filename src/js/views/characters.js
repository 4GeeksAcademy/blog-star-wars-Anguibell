import React from "react";
import { useEffect, useContext } from "react";
import { Context } from '../store/appContext'
import CardCharacters from "../component/cardCharacters";

const Characters = () => {

    const {actions, store} = useContext(Context)

    useEffect(()=> {
        actions.loadCharacters()
    }, [])

    return (
        <div>
            <h1 className="d-flex justify-content-start">Characters</h1>
            <div className="d-flex justify-content-start flex-row overflow-scroll">
                {store.characters.map((item, id)=>(
                    <CardCharacters 
                        key={id}
                        id = {id + 1}
                        name = {item.name}
                        img = {"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"}
                        gender = {item.gender}
                        eyes = {item.eye_color}
                        hair = {item.hair_color}
                    />
                ))}
            </div>
        </div>
    )
}

export default Characters;