import Preact, { Component } from 'preact';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/grid');


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

import { Loading } from '../utility';
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
            <Loading
               active={offers.loading}
               className={style.inner}
            >
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
            </Loading>
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