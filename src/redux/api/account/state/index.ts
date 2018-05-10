

/* -----------------------------------
 *
 * IAccount
 *
 * -------------------------------- */

export interface IAccount {
   loading: boolean;
   valid: boolean;
   theme: string;
   view: string;
   error: boolean;
}


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export const Account: IAccount = {
   loading: false,
   valid: false,
   theme: 'default',
   view: null,
   error: null
};