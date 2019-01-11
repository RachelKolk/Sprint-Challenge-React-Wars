import React from "react";

const Dogs = props => {
    return (
        <div>
            <img src={`${props.dogOnProps}`} alt="Basset Hound"/>
        </div>
    );
}

export default Dogs;