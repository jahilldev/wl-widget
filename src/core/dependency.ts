

/* -----------------------------------
 *
 * Dependency
 *
 * -------------------------------- */

export default class Dependency {


   public static registry: { [key: string]: any } = {};


   public static getRegistered(key: string) {

      const registered = Dependency.registry[key];

      if (registered) {

         return registered;

      }

      throw new Error(`Error: ${key} was not registered.`);

   }


}

/* -----------------------------------
 *
 * Inject Method
 *
 * -------------------------------- */

function injectMethod(...keys: string[]) {

   return (target: any, key: string, descriptor: any) => {

      const method = descriptor.value;

      descriptor.value = (...args: any[]) => {

         const add = keys.map((k: string) => Dependency.getRegistered(k));

         args = args.concat(add);

         const result = method.apply(this, args);

         return result;

      };

      return descriptor;

   };

}


/* -----------------------------------
 *
 * Inject Property
 *
 * -------------------------------- */

function injectProperty(...keys: string[]) {

   return (target: any, key: string) => {

      Object.defineProperty(target, key, {
         get: () => {
            return Dependency.getRegistered(keys[0]);
         }
      });

   };

}


/* -----------------------------------
 *
 * Inject
 *
 * -------------------------------- */

export function inject(...keys: string[]) {

   return (...args: any[]) => {

      const params = [];

      for (const a of args) {

         if (a) {

            params.push(a);

         }

      }

      switch (params.length) {

         case 2:

            return injectProperty(keys[0]).apply(this, args);

         case 3:

            return injectMethod(...keys).apply(this, args);

         default:

            throw new Error('Decorators not valid here!');

      }

   };

}


/* -----------------------------------
 *
 * Register
 *
 * -------------------------------- */

export function register(key: string, value: any) {

   const registered = Dependency.registry[key];

   Dependency.registry[key] = value;

}


/* -----------------------------------
 *
 * Access
 *
 * -------------------------------- */

export function access(key: string) {

   return Dependency.getRegistered(key);

}