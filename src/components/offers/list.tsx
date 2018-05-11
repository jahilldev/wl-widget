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

import { Loading } from '../utility';
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

      return (
         <div className={style.wrapper}>
            <Loading
               active={offers.loading}
            >
               {offers.data.map(
                  (item, index) => (
                     <div className={style.column}>
                        <TileList
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

export { List };