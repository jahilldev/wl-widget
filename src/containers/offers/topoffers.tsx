import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/topoffers');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   offerTypes: string;
   countryCode: string;
   pageSize: number;
}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      return (
         <div className={style.wrapper}>
            Top Offers
         </div>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TopOffers };