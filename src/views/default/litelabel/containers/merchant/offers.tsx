import Preact, { Component } from 'preact';
import { connect, MapStateToPropsParam } from 'preact-redux';
import { IStore } from '../../../../../redux/store';
import { List } from '../../../../../components/offers';
import { IOffers } from '../../../../../redux/api/offers';


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
 * IMap
 *
 * -------------------------------- */

type IMap = MapStateToPropsParam<IProps, IProps>;


/* -----------------------------------
 *
 * MapState
 *
 * -------------------------------- */

const mapState: IMap = (state: IStore, props: IProps) => ({
   offers: state.views.litelabel.merchant.offers
});


/* -----------------------------------
 *
 * Offers
 *
 * -------------------------------- */

const Offers = connect(mapState)(List as any);


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Offers };