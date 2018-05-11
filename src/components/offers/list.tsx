import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/list');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   offers?: IOffers;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { TileList } from '../tiles/list';


/* -----------------------------------
 *
 * List
 *
 * -------------------------------- */

class List extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      const { offers } = this.props;

      console.log('List.props.offers', offers);

      return (
         <div className={style.wrapper}>
            {/* {offers.data.map(
               (item, index) => (
                  <div className={style.column}>
                     <TileList
                        key={item.OfferId}
                        data={item}
                     />
                  </div>
               )
            )} */}
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { List };