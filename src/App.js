import React from "react";
import {csv} from "d3-fetch";

const viewHeight = 500;
const viewWidth = 500;

const App = () => {
csv(
        "https://raw.githubusercontent.com/colinmegill/react-parcel-starter/main/weather.csv"
        )
    .then(data => console.log(data));

    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
            <p>Data!</p>
        </div>
    );
};

export default App;