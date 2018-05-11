import { IMerchantMedia } from './merchant';


/* -----------------------------------
 *
 * IOffer
 *
 * -------------------------------- */

export interface IOffer {
   OfferId: number;
   OfferTitle: string;
   IsExclusive: boolean;
   Branch: {
      Name: string;
   };
   Merchant: {
      MerchantId: number;
      MerchantName: string;
      MerchantSlug: string;
      MerchantMedia: IMerchantMedia[];
   }
}