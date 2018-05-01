import Preact, { Component } from 'preact';
import { Link as RouteLink } from 'preact-router';
import * as utils from '../utility';


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   href: string;
   className?: string;
   children?: any;
}


/* -----------------------------------
 *
 * Link
 *
 * -------------------------------- */

class Link extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      const { href, className, children } = this.props;

      const route = utils.route(href);

      return (
         <RouteLink href={route} className={className}>
            {children}
         </RouteLink>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { Link };