import React from "react";

const Character = props => {
    return (
    <div>
        {props.characterOnProps.name}
        {props.characterOnProps.hair_color}
    </div>
    );
}

export default Character;