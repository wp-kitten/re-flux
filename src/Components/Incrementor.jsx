import React, { Component } from "react";
import StoreActions from "../flux/StoreActions";


class Incrementor extends Component {
    
    constructor(props) {
        super( props );
        
        this.__increment = this.__increment.bind(this);
    }
    
    __increment(){
        StoreActions.increment(2);
    }
    
    render() {
        return <p>
            <button onClick={this.__increment}>+2</button>
        </p>;
    }
    
}

export default Incrementor;
