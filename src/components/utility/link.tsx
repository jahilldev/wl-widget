import Preact, { Component } from 'preact';
import { Link as Anchor } from 'preact-router';
import { inject } from '../../core/dependency';
import { IConfig } from '../../config';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/loading');


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


   @inject('global.config')
   private config: IConfig;


   public render() {

      const { route } = this.config;
      const { href, className, children } = this.props;

      return (
         <Anchor
            href={(route || '') + href}
            className={className}
         >
            {children}
         </Anchor>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Link };