

/* -----------------------------------
 *
 * IAccount
 *
 * -------------------------------- */

export interface IAccount {
   loading: boolean;
   valid: boolean;
   view: string;
}


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export const Account: IAccount = {
   loading: false,
   valid: false,
   view: null
};