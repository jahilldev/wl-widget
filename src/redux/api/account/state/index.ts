

/* -----------------------------------
 *
 * IAccount
 *
 * -------------------------------- */

export interface IAccount {
   loading: boolean;
   data: {
      valid: boolean;
      domain: string;
      theme: string;
      view: string;
   };
   error: boolean;
}


/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export const Account: IAccount = {
   loading: false,
   data: {
      valid: false,
      domain: null,
      theme: 'default',
      view: null
   },
   error: null
};