import AppDispatcher from "../AppDispatcher";
import AppActions from "./AppActions";

class StoreActions {
    increment(by) {
        AppDispatcher.dispatch( {
            type: AppActions.INCREMENT,
            payload: by,
        } );
    }
    
    decrement(by) {
        AppDispatcher.dispatch( {
            type: AppActions.DECREMENT,
            payload: by,
        } );
    }
}

export default new StoreActions();
