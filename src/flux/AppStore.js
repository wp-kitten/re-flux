import { EventEmitter } from "events";
import AppDispatcher from "../AppDispatcher";
import AppActions from "./AppActions";

class AppStore extends EventEmitter {
    constructor() {
        super();
        
        this.storeData = {
            count: 0,
        };
        
        AppDispatcher.register( this.handleActions.bind( this ) );
    }
    
    getStoreData() {
        return this.storeData;
    }
    
    handleActions(action) {
        // action = { type, payload }
        switch ( action.type.toUpperCase() ) {
            case AppActions.INCREMENT: {
                this.__increment( action.payload );
                this.emit( "change" );
                break;
            }
            case AppActions.DECREMENT: {
                this.__decrement( action.payload );
                this.emit( "change" );
                break;
            }
            
        }
    }
    
    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on( 'change', callback );
    }
    
    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener( 'change', callback );
    }
    
    //----------------------------------------
    
    __increment(by) {
        console.warn( "Action INCREMENT triggered." );
        let count = this.storeData.count;
        this.storeData.count = count + by;
    }
    
    __decrement(by) {
        console.warn( "Action DECREMENT triggered." );
        let count = this.storeData.count;
        this.storeData.count = count - by;
        
    }
    
}

export default new AppStore();
