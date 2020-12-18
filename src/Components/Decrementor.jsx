import React, { Component } from "react";
import StoreActions from "../flux/StoreActions";


class Decrementor extends Component {
    
    constructor(props) {
        super( props );
        
        this.__decrement = this.__decrement.bind(this);
    }
    
    __decrement(){
        StoreActions.decrement(1);
    }
    
    render() {
        return <p>
            <button onClick={this.__decrement}>-1</button>
        </p>;
    }
    
}

export default Decrementor;
