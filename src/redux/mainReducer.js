import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2165555Reducer from '../features/SignIn2165555/redux/reducers'
import SignIn2165541Reducer from '../features/SignIn2165541/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2165555: SignIn2165555Reducer,
SignIn2165541: SignIn2165541Reducer,

});