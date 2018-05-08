

/* -----------------------------------
 *
 * IAccount
 *
 * -------------------------------- */

export interface IAccount {
   loading: boolean;
   valid: boolean;
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
   view: null,
   error: null
};