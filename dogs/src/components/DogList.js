import React from "react";

import Dog from "./Dog";

function DogList(props) {
    console.log("getting dogs");
    return (
        <div ClassName="dogs">
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