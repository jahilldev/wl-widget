import Preact, { Component } from 'preact';
import * as utils from '../../utility';


/* -----------------------------------
 *
 * IState
 *
 * -------------------------------- */

interface IState {
   child: any;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

const imports = {
   TileBlock: import('../../components/tiles/block')
};


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<{}, {}> {


   public state: IState = {
      child: null
   };


   public async componentWillMount() {

      const child = await utils.imports(imports);

      this.setState({
         child
      });

   }


   public render() {

      const { child } = this.state;

      if (!child) {

         return (
            <h1>Loading</h1>
         );

      }

      return (
         <child.TileBlock />
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TopOffers };