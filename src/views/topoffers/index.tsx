import Preact, { Component } from 'preact';
import { inject } from '../../core/dependency';


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<{}, {}> {


   @inject('global.document')
   private document: Document;


   public render() {

      return (
         <h1>TopOffers</h1>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TopOffers };