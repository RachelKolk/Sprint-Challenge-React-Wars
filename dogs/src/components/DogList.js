import React from "react";

import Dog from "./Dog";

function DogList(props) {
    return (
        <div>
           {props.dogs.map(dogInMap => (
               <Dog
                  key={dogInMap.index}
                  dogOnProps={dogInMap}
                />
           ))} 
        </div>
    );
};

export default DogList;