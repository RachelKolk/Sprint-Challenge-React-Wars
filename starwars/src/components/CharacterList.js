import React from "react";

import Character from "./Character";

function CharacterList(props) {
    console.log('running char list');
    return (
        <div className="character">
            {props.characters.map(characterInMap => (
                <Character 
                    key={characterInMap.created}
                    characterOnProps={characterInMap}
                />

            ))}
        </div>
    );
};

export default CharacterList;