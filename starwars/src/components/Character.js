import React from "react";

const Character = props => {
    return (
    <div>
        <h3>{props.characterOnProps.name}</h3>
        <p>Birth Year: {props.characterOnProps.birth_year}</p>
        <p>Height: {props.characterOnProps.height}</p>
        <p>Gender: {props.characterOnProps.gender}</p>
        <p>Mass: {props.characterOnProps.mass}</p>
        <p>Hair Color: {props.characterOnProps.hair_color}</p>

    </div>
    );
}

export default Character;