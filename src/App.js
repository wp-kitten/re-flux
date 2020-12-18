import React, { Component } from 'react';
import AppStore from "./flux/AppStore";
import Incrementor from "./Components/Incrementor";
import Decrementor from "./Components/Decrementor";


class App extends Component {
    
    constructor(params) {
        super( params );
        
        this.state = {
            store: AppStore.getStoreData(),
        };
    
        this.__onChange = this.__onChange.bind( this );
    }
    
    __onChange() {
        this.setState( { store: AppStore.getStoreData() } )
    }
    
    componentDidMount() {
        AppStore.addChangeListener( this.__onChange );
    }
    
    componentWillUnmount() {
        AppStore.removeChangeListener( this.__onChange );
    }
    
    render() {
        return (
            <div className="App">
                <p>Store count: {this.state.store.count}</p>
                <Incrementor store={this.state.store}/>
                <Decrementor store={this.state.store}/>
            </div>
        );
    }
}

export default App;
