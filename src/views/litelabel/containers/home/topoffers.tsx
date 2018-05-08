import Preact, { Component } from 'preact';
import { connect, MapStateToPropsParam } from 'preact-redux';
import { IStore } from '../../../../redux/store';
import { IProps, OfferRow } from '../../../../components/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/topoffers');


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
   title: props.title,
   offers: state.views.litelabel.home.topoffers,
   style
});


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

const TopOffers = connect(mapState)(OfferRow);


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { TopOffers };