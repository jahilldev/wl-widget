import Preact, { Component } from 'preact';
import { Provider } from 'preact-redux';
import * as utils from '../utility';


/* -----------------------------------
 *
 * IState
 *
 * -------------------------------- */

interface IState {
   View: typeof Component;
}


/* -----------------------------------
 *
 * IList
 *
 * -------------------------------- */

interface IList {
   [index: string]: Promise<any>;
}


/* -----------------------------------
 *
 * List
 *
 * -------------------------------- */

const list: IList = {
   TopOffers: import('./topoffers')
};


/* -----------------------------------
 *
 * Index
 *
 * -------------------------------- */

class Views extends Component<{}, IState> {


   public state: IState = {
      View: null
   };


   public async componentWillMount() {

      const view = await utils.imports(list, 'TopOffers');

      this.setState({
         View: view.TopOffers
      });

   }


   public render() {

      const { View } = this.state;

      if (!View) {

         return (
            <em>Loading..</em>
         );

      }

      return (
         <View />
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Views };