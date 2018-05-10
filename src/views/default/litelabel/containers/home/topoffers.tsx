import Preact, { Component } from 'preact';
import { connect, MapStateToPropsParam } from 'preact-redux';
import { IStore } from '../../../../../redux/store';
import { IProps, Default } from '../../../../../components/offers';


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
   offers: state.views.litelabel.home.topoffers
});


/* -----------------------------------
 *
 * Offers
 *
 * -------------------------------- */

const TopOffers = connect(mapState)(Default);


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { TopOffers };