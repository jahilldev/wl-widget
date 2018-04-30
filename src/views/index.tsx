import Preact, { Component } from 'preact';
import { connect, Provider } from 'preact-redux';
import { IStore } from '../redux/store';
import { IAccount } from '../redux/api';
import * as utils from '../utility';
import { list } from './list';


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
   view: typeof Component;
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
      view: null
   };


   public async componentWillMount() {

      const { account } = this.props;
      const { view } = account;

      const result = await utils.imports(list, view);

      this.setState({
         view: result[view]
      });

   }


   public render() {

      const { view } = this.state;
      const Output = view;

      if (!view) {

         return (
            <em>Loading..</em>
         );

      }

      return (
         <Output />
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Views };