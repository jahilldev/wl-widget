import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/default');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IProps {
   offers?: IOffers;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { TileBlock } from '../tiles/block';


/* -----------------------------------
 *
 * Default
 *
 * -------------------------------- */

class Default extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      const { offers } = this.props;

      return (
         <div className={style.wrapper}>
            {offers.data.map(
               (item, index) => (
                  <div className={style.column}>
                     <TileBlock
                        key={item.OfferId}
                        data={item}
                     />
                  </div>
               )
            )}
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Default };