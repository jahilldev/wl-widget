import Preact, { Component } from 'preact';
import { connect, Provider } from 'preact-redux';
import { IStore } from '../redux/store';
import { IAccount } from '../redux/api';
import * as utils from '../utility';
import { manifest } from './manifest';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   account?: IAccount;
}


/* -----------------------------------
 *
 * IState
 *
 * -------------------------------- */

interface IState {
   View: typeof Component;
}


/* -----------------------------------
 *
 * Connect
 *
 * -------------------------------- */

@(connect(
   (state: IStore) => ({
      account: state.api.account
   })
) as any)


/* -----------------------------------
 *
 * Index
 *
 * -------------------------------- */

class Views extends Component<IProps, IState> {


   public props: IProps;


   public state: IState = {
      View: null
   };


   public async componentWillMount() {

      const { account } = this.props;
      const { view } = account;

      const result = await utils.imports(manifest, view);

      this.setState({
         View: result[view]
      });

   }


   public render() {

      const { View } = this.state;

      if (View) {

         return (
            <View />
         );

      }

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Views };