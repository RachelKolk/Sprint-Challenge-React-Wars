import React from "react";

const Dogs = props => {
    return (
        <div>
            <img src={`${props.dogOnProps.index}`} alt="Basset Hound"/>
        </div>
    );
}

export default Dogs;