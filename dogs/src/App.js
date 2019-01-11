import React, {Component} from "react";
import "./App.css";
import DogList from "./components/DogList";


class App extends Component {
    constructor() {
        super();
        this.state = {
            dogPhotos: []
        };
    }

    componentDidMount() {
        this.getDogs("https://dog.ceo/api/breed/hound/basset/images/random/10");
    }


    getDogs = URL => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ dogPhotos: data.message });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    render() {
        return (
            <div className="App">
                <h1>DOGS!</h1>
                <DogList
                   dogs={this.state.dogPhotos}
                /> 
            </div>
        );
    }
}
export default App;