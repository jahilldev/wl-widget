import Preact, { Component } from 'preact';
import { connect } from 'preact-redux';
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
 * Connect
 *
 * -------------------------------- */

const mapState = (state: IStore, props: IProps) => ({
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