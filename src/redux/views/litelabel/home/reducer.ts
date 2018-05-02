// import update from 'immutability-helper';
import { IAction } from './model';
import { Home } from './state';
import { SET_LOADING } from './model';


/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

function reducer(state = Home, action: IAction) {


   switch (action.type) {


      case SET_LOADING: {

         const { data } = action.payload;

         return {...state, ...data};

      }


      default: {

         return state;

      }


   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };