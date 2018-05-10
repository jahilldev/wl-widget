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
 * Components
 *
 * -------------------------------- */

import { InvalidKey } from '../components/utility';


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
      View: undefined
   };


   public async componentWillMount() {

      const { account } = this.props;
      const { theme, view } = account;

      const list = manifest[theme] || manifest.default;
      const result = await utils.imports(list, view);

      this.setState({
         View: result[view]
      });

   }


   public render() {

      const { account } = this.props;
      const { View } = this.state;

      if (!account.valid) {

         return (
            <InvalidKey />
         );

      }

      return (
         <View />
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Views };