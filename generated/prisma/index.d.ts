
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Promotor
 * 
 */
export type Promotor = $Result.DefaultSelection<Prisma.$PromotorPayload>
/**
 * Model Venda
 * 
 */
export type Venda = $Result.DefaultSelection<Prisma.$VendaPayload>
/**
 * Model DesempenhoMensal
 * 
 */
export type DesempenhoMensal = $Result.DefaultSelection<Prisma.$DesempenhoMensalPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotor`: Exposes CRUD operations for the **Promotor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotors
    * const promotors = await prisma.promotor.findMany()
    * ```
    */
  get promotor(): Prisma.PromotorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venda`: Exposes CRUD operations for the **Venda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendas
    * const vendas = await prisma.venda.findMany()
    * ```
    */
  get venda(): Prisma.VendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.desempenhoMensal`: Exposes CRUD operations for the **DesempenhoMensal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesempenhoMensals
    * const desempenhoMensals = await prisma.desempenhoMensal.findMany()
    * ```
    */
  get desempenhoMensal(): Prisma.DesempenhoMensalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Promotor: 'Promotor',
    Venda: 'Venda',
    DesempenhoMensal: 'DesempenhoMensal',
    Feedback: 'Feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "promotor" | "venda" | "desempenhoMensal" | "feedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Promotor: {
        payload: Prisma.$PromotorPayload<ExtArgs>
        fields: Prisma.PromotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findFirst: {
            args: Prisma.PromotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findMany: {
            args: Prisma.PromotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          create: {
            args: Prisma.PromotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          createMany: {
            args: Prisma.PromotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          delete: {
            args: Prisma.PromotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          update: {
            args: Prisma.PromotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          deleteMany: {
            args: Prisma.PromotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          upsert: {
            args: Prisma.PromotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          aggregate: {
            args: Prisma.PromotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotor>
          }
          groupBy: {
            args: Prisma.PromotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotorCountArgs<ExtArgs>
            result: $Utils.Optional<PromotorCountAggregateOutputType> | number
          }
        }
      }
      Venda: {
        payload: Prisma.$VendaPayload<ExtArgs>
        fields: Prisma.VendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findFirst: {
            args: Prisma.VendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findMany: {
            args: Prisma.VendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>[]
          }
          create: {
            args: Prisma.VendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          createMany: {
            args: Prisma.VendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>[]
          }
          delete: {
            args: Prisma.VendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          update: {
            args: Prisma.VendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          deleteMany: {
            args: Prisma.VendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>[]
          }
          upsert: {
            args: Prisma.VendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          aggregate: {
            args: Prisma.VendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenda>
          }
          groupBy: {
            args: Prisma.VendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendaCountArgs<ExtArgs>
            result: $Utils.Optional<VendaCountAggregateOutputType> | number
          }
        }
      }
      DesempenhoMensal: {
        payload: Prisma.$DesempenhoMensalPayload<ExtArgs>
        fields: Prisma.DesempenhoMensalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesempenhoMensalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesempenhoMensalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          findFirst: {
            args: Prisma.DesempenhoMensalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesempenhoMensalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          findMany: {
            args: Prisma.DesempenhoMensalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>[]
          }
          create: {
            args: Prisma.DesempenhoMensalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          createMany: {
            args: Prisma.DesempenhoMensalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesempenhoMensalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>[]
          }
          delete: {
            args: Prisma.DesempenhoMensalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          update: {
            args: Prisma.DesempenhoMensalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          deleteMany: {
            args: Prisma.DesempenhoMensalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesempenhoMensalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesempenhoMensalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>[]
          }
          upsert: {
            args: Prisma.DesempenhoMensalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesempenhoMensalPayload>
          }
          aggregate: {
            args: Prisma.DesempenhoMensalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesempenhoMensal>
          }
          groupBy: {
            args: Prisma.DesempenhoMensalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesempenhoMensalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesempenhoMensalCountArgs<ExtArgs>
            result: $Utils.Optional<DesempenhoMensalCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    promotor?: PromotorOmit
    venda?: VendaOmit
    desempenhoMensal?: DesempenhoMensalOmit
    feedback?: FeedbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    feedback: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | UsuarioCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type PromotorCountOutputType
   */

  export type PromotorCountOutputType = {
    vendas: number
    desempenho: number
    feedback: number
  }

  export type PromotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | PromotorCountOutputTypeCountVendasArgs
    desempenho?: boolean | PromotorCountOutputTypeCountDesempenhoArgs
    feedback?: boolean | PromotorCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotorCountOutputType
     */
    select?: PromotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountDesempenhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesempenhoMensalWhereInput
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    matricula: string | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    matricula: string | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    matricula: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    matricula?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    createdAt?: boolean
    feedback?: boolean | Usuario$feedbackArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    matricula?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "matricula" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | Usuario$feedbackArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      matricula: string
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends Usuario$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly matricula: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.feedback
   */
  export type Usuario$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Promotor
   */

  export type AggregatePromotor = {
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  export type PromotorAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotorSumAggregateOutputType = {
    id: number | null
  }

  export type PromotorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    fotoUrl: string | null
    matricula: string | null
    email: string | null
    telefone: string | null
  }

  export type PromotorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    fotoUrl: string | null
    matricula: string | null
    email: string | null
    telefone: string | null
  }

  export type PromotorCountAggregateOutputType = {
    id: number
    nome: number
    fotoUrl: number
    matricula: number
    email: number
    telefone: number
    _all: number
  }


  export type PromotorAvgAggregateInputType = {
    id?: true
  }

  export type PromotorSumAggregateInputType = {
    id?: true
  }

  export type PromotorMinAggregateInputType = {
    id?: true
    nome?: true
    fotoUrl?: true
    matricula?: true
    email?: true
    telefone?: true
  }

  export type PromotorMaxAggregateInputType = {
    id?: true
    nome?: true
    fotoUrl?: true
    matricula?: true
    email?: true
    telefone?: true
  }

  export type PromotorCountAggregateInputType = {
    id?: true
    nome?: true
    fotoUrl?: true
    matricula?: true
    email?: true
    telefone?: true
    _all?: true
  }

  export type PromotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotor to aggregate.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotors
    **/
    _count?: true | PromotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotorMaxAggregateInputType
  }

  export type GetPromotorAggregateType<T extends PromotorAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotor[P]>
      : GetScalarType<T[P], AggregatePromotor[P]>
  }




  export type PromotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotorWhereInput
    orderBy?: PromotorOrderByWithAggregationInput | PromotorOrderByWithAggregationInput[]
    by: PromotorScalarFieldEnum[] | PromotorScalarFieldEnum
    having?: PromotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotorCountAggregateInputType | true
    _avg?: PromotorAvgAggregateInputType
    _sum?: PromotorSumAggregateInputType
    _min?: PromotorMinAggregateInputType
    _max?: PromotorMaxAggregateInputType
  }

  export type PromotorGroupByOutputType = {
    id: number
    nome: string
    fotoUrl: string
    matricula: string
    email: string | null
    telefone: string | null
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  type GetPromotorGroupByPayload<T extends PromotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotorGroupByOutputType[P]>
            : GetScalarType<T[P], PromotorGroupByOutputType[P]>
        }
      >
    >


  export type PromotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fotoUrl?: boolean
    matricula?: boolean
    email?: boolean
    telefone?: boolean
    vendas?: boolean | Promotor$vendasArgs<ExtArgs>
    desempenho?: boolean | Promotor$desempenhoArgs<ExtArgs>
    feedback?: boolean | Promotor$feedbackArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fotoUrl?: boolean
    matricula?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fotoUrl?: boolean
    matricula?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectScalar = {
    id?: boolean
    nome?: boolean
    fotoUrl?: boolean
    matricula?: boolean
    email?: boolean
    telefone?: boolean
  }

  export type PromotorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "fotoUrl" | "matricula" | "email" | "telefone", ExtArgs["result"]["promotor"]>
  export type PromotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Promotor$vendasArgs<ExtArgs>
    desempenho?: boolean | Promotor$desempenhoArgs<ExtArgs>
    feedback?: boolean | Promotor$feedbackArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromotorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotor"
    objects: {
      vendas: Prisma.$VendaPayload<ExtArgs>[]
      desempenho: Prisma.$DesempenhoMensalPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      fotoUrl: string
      matricula: string
      email: string | null
      telefone: string | null
    }, ExtArgs["result"]["promotor"]>
    composites: {}
  }

  type PromotorGetPayload<S extends boolean | null | undefined | PromotorDefaultArgs> = $Result.GetResult<Prisma.$PromotorPayload, S>

  type PromotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotorCountAggregateInputType | true
    }

  export interface PromotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotor'], meta: { name: 'Promotor' } }
    /**
     * Find zero or one Promotor that matches the filter.
     * @param {PromotorFindUniqueArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotorFindUniqueArgs>(args: SelectSubset<T, PromotorFindUniqueArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotorFindUniqueOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotorFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotorFindFirstArgs>(args?: SelectSubset<T, PromotorFindFirstArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotorFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotors
     * const promotors = await prisma.promotor.findMany()
     * 
     * // Get first 10 Promotors
     * const promotors = await prisma.promotor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotorWithIdOnly = await prisma.promotor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotorFindManyArgs>(args?: SelectSubset<T, PromotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotor.
     * @param {PromotorCreateArgs} args - Arguments to create a Promotor.
     * @example
     * // Create one Promotor
     * const Promotor = await prisma.promotor.create({
     *   data: {
     *     // ... data to create a Promotor
     *   }
     * })
     * 
     */
    create<T extends PromotorCreateArgs>(args: SelectSubset<T, PromotorCreateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotors.
     * @param {PromotorCreateManyArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotorCreateManyArgs>(args?: SelectSubset<T, PromotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotors and returns the data saved in the database.
     * @param {PromotorCreateManyAndReturnArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotorCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotor.
     * @param {PromotorDeleteArgs} args - Arguments to delete one Promotor.
     * @example
     * // Delete one Promotor
     * const Promotor = await prisma.promotor.delete({
     *   where: {
     *     // ... filter to delete one Promotor
     *   }
     * })
     * 
     */
    delete<T extends PromotorDeleteArgs>(args: SelectSubset<T, PromotorDeleteArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotor.
     * @param {PromotorUpdateArgs} args - Arguments to update one Promotor.
     * @example
     * // Update one Promotor
     * const promotor = await prisma.promotor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotorUpdateArgs>(args: SelectSubset<T, PromotorUpdateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotors.
     * @param {PromotorDeleteManyArgs} args - Arguments to filter Promotors to delete.
     * @example
     * // Delete a few Promotors
     * const { count } = await prisma.promotor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotorDeleteManyArgs>(args?: SelectSubset<T, PromotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotorUpdateManyArgs>(args: SelectSubset<T, PromotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors and returns the data updated in the database.
     * @param {PromotorUpdateManyAndReturnArgs} args - Arguments to update many Promotors.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromotorUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotor.
     * @param {PromotorUpsertArgs} args - Arguments to update or create a Promotor.
     * @example
     * // Update or create a Promotor
     * const promotor = await prisma.promotor.upsert({
     *   create: {
     *     // ... data to create a Promotor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotor we want to update
     *   }
     * })
     */
    upsert<T extends PromotorUpsertArgs>(args: SelectSubset<T, PromotorUpsertArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorCountArgs} args - Arguments to filter Promotors to count.
     * @example
     * // Count the number of Promotors
     * const count = await prisma.promotor.count({
     *   where: {
     *     // ... the filter for the Promotors we want to count
     *   }
     * })
    **/
    count<T extends PromotorCountArgs>(
      args?: Subset<T, PromotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotorAggregateArgs>(args: Subset<T, PromotorAggregateArgs>): Prisma.PrismaPromise<GetPromotorAggregateType<T>>

    /**
     * Group by Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotorGroupByArgs['orderBy'] }
        : { orderBy?: PromotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotor model
   */
  readonly fields: PromotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Promotor$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    desempenho<T extends Promotor$desempenhoArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$desempenhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends Promotor$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotor model
   */
  interface PromotorFieldRefs {
    readonly id: FieldRef<"Promotor", 'Int'>
    readonly nome: FieldRef<"Promotor", 'String'>
    readonly fotoUrl: FieldRef<"Promotor", 'String'>
    readonly matricula: FieldRef<"Promotor", 'String'>
    readonly email: FieldRef<"Promotor", 'String'>
    readonly telefone: FieldRef<"Promotor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Promotor findUnique
   */
  export type PromotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findUniqueOrThrow
   */
  export type PromotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findFirst
   */
  export type PromotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findFirstOrThrow
   */
  export type PromotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findMany
   */
  export type PromotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotors to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor create
   */
  export type PromotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotor.
     */
    data: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
  }

  /**
   * Promotor createMany
   */
  export type PromotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor createManyAndReturn
   */
  export type PromotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor update
   */
  export type PromotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotor.
     */
    data: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
    /**
     * Choose, which Promotor to update.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor updateMany
   */
  export type PromotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
    /**
     * Limit how many Promotors to update.
     */
    limit?: number
  }

  /**
   * Promotor updateManyAndReturn
   */
  export type PromotorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
    /**
     * Limit how many Promotors to update.
     */
    limit?: number
  }

  /**
   * Promotor upsert
   */
  export type PromotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotor to update in case it exists.
     */
    where: PromotorWhereUniqueInput
    /**
     * In case the Promotor found by the `where` argument doesn't exist, create a new Promotor with this data.
     */
    create: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
    /**
     * In case the Promotor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
  }

  /**
   * Promotor delete
   */
  export type PromotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter which Promotor to delete.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor deleteMany
   */
  export type PromotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotors to delete
     */
    where?: PromotorWhereInput
    /**
     * Limit how many Promotors to delete.
     */
    limit?: number
  }

  /**
   * Promotor.vendas
   */
  export type Promotor$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    cursor?: VendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Promotor.desempenho
   */
  export type Promotor$desempenhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    where?: DesempenhoMensalWhereInput
    orderBy?: DesempenhoMensalOrderByWithRelationInput | DesempenhoMensalOrderByWithRelationInput[]
    cursor?: DesempenhoMensalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesempenhoMensalScalarFieldEnum | DesempenhoMensalScalarFieldEnum[]
  }

  /**
   * Promotor.feedback
   */
  export type Promotor$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Promotor without action
   */
  export type PromotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotor
     */
    omit?: PromotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
  }


  /**
   * Model Venda
   */

  export type AggregateVenda = {
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  export type VendaAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    promotorId: number | null
  }

  export type VendaSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    promotorId: number | null
  }

  export type VendaMinAggregateOutputType = {
    id: number | null
    data: Date | null
    quantidade: number | null
    promotorId: number | null
  }

  export type VendaMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    quantidade: number | null
    promotorId: number | null
  }

  export type VendaCountAggregateOutputType = {
    id: number
    data: number
    quantidade: number
    promotorId: number
    _all: number
  }


  export type VendaAvgAggregateInputType = {
    id?: true
    quantidade?: true
    promotorId?: true
  }

  export type VendaSumAggregateInputType = {
    id?: true
    quantidade?: true
    promotorId?: true
  }

  export type VendaMinAggregateInputType = {
    id?: true
    data?: true
    quantidade?: true
    promotorId?: true
  }

  export type VendaMaxAggregateInputType = {
    id?: true
    data?: true
    quantidade?: true
    promotorId?: true
  }

  export type VendaCountAggregateInputType = {
    id?: true
    data?: true
    quantidade?: true
    promotorId?: true
    _all?: true
  }

  export type VendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venda to aggregate.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendas
    **/
    _count?: true | VendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendaMaxAggregateInputType
  }

  export type GetVendaAggregateType<T extends VendaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenda[P]>
      : GetScalarType<T[P], AggregateVenda[P]>
  }




  export type VendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithAggregationInput | VendaOrderByWithAggregationInput[]
    by: VendaScalarFieldEnum[] | VendaScalarFieldEnum
    having?: VendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendaCountAggregateInputType | true
    _avg?: VendaAvgAggregateInputType
    _sum?: VendaSumAggregateInputType
    _min?: VendaMinAggregateInputType
    _max?: VendaMaxAggregateInputType
  }

  export type VendaGroupByOutputType = {
    id: number
    data: Date
    quantidade: number
    promotorId: number
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  type GetVendaGroupByPayload<T extends VendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendaGroupByOutputType[P]>
            : GetScalarType<T[P], VendaGroupByOutputType[P]>
        }
      >
    >


  export type VendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    quantidade?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venda"]>

  export type VendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    quantidade?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venda"]>

  export type VendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    quantidade?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venda"]>

  export type VendaSelectScalar = {
    id?: boolean
    data?: boolean
    quantidade?: boolean
    promotorId?: boolean
  }

  export type VendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "quantidade" | "promotorId", ExtArgs["result"]["venda"]>
  export type VendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }
  export type VendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }
  export type VendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }

  export type $VendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venda"
    objects: {
      promotor: Prisma.$PromotorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      quantidade: number
      promotorId: number
    }, ExtArgs["result"]["venda"]>
    composites: {}
  }

  type VendaGetPayload<S extends boolean | null | undefined | VendaDefaultArgs> = $Result.GetResult<Prisma.$VendaPayload, S>

  type VendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendaCountAggregateInputType | true
    }

  export interface VendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venda'], meta: { name: 'Venda' } }
    /**
     * Find zero or one Venda that matches the filter.
     * @param {VendaFindUniqueArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendaFindUniqueArgs>(args: SelectSubset<T, VendaFindUniqueArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendaFindUniqueOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendaFindUniqueOrThrowArgs>(args: SelectSubset<T, VendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendaFindFirstArgs>(args?: SelectSubset<T, VendaFindFirstArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendaFindFirstOrThrowArgs>(args?: SelectSubset<T, VendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendas
     * const vendas = await prisma.venda.findMany()
     * 
     * // Get first 10 Vendas
     * const vendas = await prisma.venda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendaWithIdOnly = await prisma.venda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendaFindManyArgs>(args?: SelectSubset<T, VendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venda.
     * @param {VendaCreateArgs} args - Arguments to create a Venda.
     * @example
     * // Create one Venda
     * const Venda = await prisma.venda.create({
     *   data: {
     *     // ... data to create a Venda
     *   }
     * })
     * 
     */
    create<T extends VendaCreateArgs>(args: SelectSubset<T, VendaCreateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendas.
     * @param {VendaCreateManyArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const venda = await prisma.venda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendaCreateManyArgs>(args?: SelectSubset<T, VendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendas and returns the data saved in the database.
     * @param {VendaCreateManyAndReturnArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const venda = await prisma.venda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendas and only return the `id`
     * const vendaWithIdOnly = await prisma.venda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendaCreateManyAndReturnArgs>(args?: SelectSubset<T, VendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venda.
     * @param {VendaDeleteArgs} args - Arguments to delete one Venda.
     * @example
     * // Delete one Venda
     * const Venda = await prisma.venda.delete({
     *   where: {
     *     // ... filter to delete one Venda
     *   }
     * })
     * 
     */
    delete<T extends VendaDeleteArgs>(args: SelectSubset<T, VendaDeleteArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venda.
     * @param {VendaUpdateArgs} args - Arguments to update one Venda.
     * @example
     * // Update one Venda
     * const venda = await prisma.venda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendaUpdateArgs>(args: SelectSubset<T, VendaUpdateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendas.
     * @param {VendaDeleteManyArgs} args - Arguments to filter Vendas to delete.
     * @example
     * // Delete a few Vendas
     * const { count } = await prisma.venda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendaDeleteManyArgs>(args?: SelectSubset<T, VendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendas
     * const venda = await prisma.venda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendaUpdateManyArgs>(args: SelectSubset<T, VendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas and returns the data updated in the database.
     * @param {VendaUpdateManyAndReturnArgs} args - Arguments to update many Vendas.
     * @example
     * // Update many Vendas
     * const venda = await prisma.venda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendas and only return the `id`
     * const vendaWithIdOnly = await prisma.venda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendaUpdateManyAndReturnArgs>(args: SelectSubset<T, VendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venda.
     * @param {VendaUpsertArgs} args - Arguments to update or create a Venda.
     * @example
     * // Update or create a Venda
     * const venda = await prisma.venda.upsert({
     *   create: {
     *     // ... data to create a Venda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venda we want to update
     *   }
     * })
     */
    upsert<T extends VendaUpsertArgs>(args: SelectSubset<T, VendaUpsertArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaCountArgs} args - Arguments to filter Vendas to count.
     * @example
     * // Count the number of Vendas
     * const count = await prisma.venda.count({
     *   where: {
     *     // ... the filter for the Vendas we want to count
     *   }
     * })
    **/
    count<T extends VendaCountArgs>(
      args?: Subset<T, VendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendaAggregateArgs>(args: Subset<T, VendaAggregateArgs>): Prisma.PrismaPromise<GetVendaAggregateType<T>>

    /**
     * Group by Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendaGroupByArgs['orderBy'] }
        : { orderBy?: VendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venda model
   */
  readonly fields: VendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venda model
   */
  interface VendaFieldRefs {
    readonly id: FieldRef<"Venda", 'Int'>
    readonly data: FieldRef<"Venda", 'DateTime'>
    readonly quantidade: FieldRef<"Venda", 'Int'>
    readonly promotorId: FieldRef<"Venda", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venda findUnique
   */
  export type VendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findUniqueOrThrow
   */
  export type VendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findFirst
   */
  export type VendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findFirstOrThrow
   */
  export type VendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findMany
   */
  export type VendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda create
   */
  export type VendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venda.
     */
    data: XOR<VendaCreateInput, VendaUncheckedCreateInput>
  }

  /**
   * Venda createMany
   */
  export type VendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendas.
     */
    data: VendaCreateManyInput | VendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venda createManyAndReturn
   */
  export type VendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * The data used to create many Vendas.
     */
    data: VendaCreateManyInput | VendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venda update
   */
  export type VendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venda.
     */
    data: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
    /**
     * Choose, which Venda to update.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda updateMany
   */
  export type VendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to update.
     */
    limit?: number
  }

  /**
   * Venda updateManyAndReturn
   */
  export type VendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venda upsert
   */
  export type VendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venda to update in case it exists.
     */
    where: VendaWhereUniqueInput
    /**
     * In case the Venda found by the `where` argument doesn't exist, create a new Venda with this data.
     */
    create: XOR<VendaCreateInput, VendaUncheckedCreateInput>
    /**
     * In case the Venda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
  }

  /**
   * Venda delete
   */
  export type VendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter which Venda to delete.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda deleteMany
   */
  export type VendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to delete
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to delete.
     */
    limit?: number
  }

  /**
   * Venda without action
   */
  export type VendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
  }


  /**
   * Model DesempenhoMensal
   */

  export type AggregateDesempenhoMensal = {
    _count: DesempenhoMensalCountAggregateOutputType | null
    _avg: DesempenhoMensalAvgAggregateOutputType | null
    _sum: DesempenhoMensalSumAggregateOutputType | null
    _min: DesempenhoMensalMinAggregateOutputType | null
    _max: DesempenhoMensalMaxAggregateOutputType | null
  }

  export type DesempenhoMensalAvgAggregateOutputType = {
    id: number | null
    mes: number | null
    ano: number | null
    vendas: number | null
    faltas: number | null
    promotorId: number | null
  }

  export type DesempenhoMensalSumAggregateOutputType = {
    id: number | null
    mes: number | null
    ano: number | null
    vendas: number | null
    faltas: number | null
    promotorId: number | null
  }

  export type DesempenhoMensalMinAggregateOutputType = {
    id: number | null
    mes: number | null
    ano: number | null
    vendas: number | null
    faltas: number | null
    promotorId: number | null
  }

  export type DesempenhoMensalMaxAggregateOutputType = {
    id: number | null
    mes: number | null
    ano: number | null
    vendas: number | null
    faltas: number | null
    promotorId: number | null
  }

  export type DesempenhoMensalCountAggregateOutputType = {
    id: number
    mes: number
    ano: number
    vendas: number
    faltas: number
    promotorId: number
    _all: number
  }


  export type DesempenhoMensalAvgAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    vendas?: true
    faltas?: true
    promotorId?: true
  }

  export type DesempenhoMensalSumAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    vendas?: true
    faltas?: true
    promotorId?: true
  }

  export type DesempenhoMensalMinAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    vendas?: true
    faltas?: true
    promotorId?: true
  }

  export type DesempenhoMensalMaxAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    vendas?: true
    faltas?: true
    promotorId?: true
  }

  export type DesempenhoMensalCountAggregateInputType = {
    id?: true
    mes?: true
    ano?: true
    vendas?: true
    faltas?: true
    promotorId?: true
    _all?: true
  }

  export type DesempenhoMensalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesempenhoMensal to aggregate.
     */
    where?: DesempenhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoMensals to fetch.
     */
    orderBy?: DesempenhoMensalOrderByWithRelationInput | DesempenhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesempenhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesempenhoMensals
    **/
    _count?: true | DesempenhoMensalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesempenhoMensalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesempenhoMensalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesempenhoMensalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesempenhoMensalMaxAggregateInputType
  }

  export type GetDesempenhoMensalAggregateType<T extends DesempenhoMensalAggregateArgs> = {
        [P in keyof T & keyof AggregateDesempenhoMensal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesempenhoMensal[P]>
      : GetScalarType<T[P], AggregateDesempenhoMensal[P]>
  }




  export type DesempenhoMensalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesempenhoMensalWhereInput
    orderBy?: DesempenhoMensalOrderByWithAggregationInput | DesempenhoMensalOrderByWithAggregationInput[]
    by: DesempenhoMensalScalarFieldEnum[] | DesempenhoMensalScalarFieldEnum
    having?: DesempenhoMensalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesempenhoMensalCountAggregateInputType | true
    _avg?: DesempenhoMensalAvgAggregateInputType
    _sum?: DesempenhoMensalSumAggregateInputType
    _min?: DesempenhoMensalMinAggregateInputType
    _max?: DesempenhoMensalMaxAggregateInputType
  }

  export type DesempenhoMensalGroupByOutputType = {
    id: number
    mes: number
    ano: number
    vendas: number
    faltas: number
    promotorId: number
    _count: DesempenhoMensalCountAggregateOutputType | null
    _avg: DesempenhoMensalAvgAggregateOutputType | null
    _sum: DesempenhoMensalSumAggregateOutputType | null
    _min: DesempenhoMensalMinAggregateOutputType | null
    _max: DesempenhoMensalMaxAggregateOutputType | null
  }

  type GetDesempenhoMensalGroupByPayload<T extends DesempenhoMensalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesempenhoMensalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesempenhoMensalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesempenhoMensalGroupByOutputType[P]>
            : GetScalarType<T[P], DesempenhoMensalGroupByOutputType[P]>
        }
      >
    >


  export type DesempenhoMensalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    vendas?: boolean
    faltas?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desempenhoMensal"]>

  export type DesempenhoMensalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    vendas?: boolean
    faltas?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desempenhoMensal"]>

  export type DesempenhoMensalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mes?: boolean
    ano?: boolean
    vendas?: boolean
    faltas?: boolean
    promotorId?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desempenhoMensal"]>

  export type DesempenhoMensalSelectScalar = {
    id?: boolean
    mes?: boolean
    ano?: boolean
    vendas?: boolean
    faltas?: boolean
    promotorId?: boolean
  }

  export type DesempenhoMensalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mes" | "ano" | "vendas" | "faltas" | "promotorId", ExtArgs["result"]["desempenhoMensal"]>
  export type DesempenhoMensalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }
  export type DesempenhoMensalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }
  export type DesempenhoMensalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }

  export type $DesempenhoMensalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesempenhoMensal"
    objects: {
      promotor: Prisma.$PromotorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mes: number
      ano: number
      vendas: number
      faltas: number
      promotorId: number
    }, ExtArgs["result"]["desempenhoMensal"]>
    composites: {}
  }

  type DesempenhoMensalGetPayload<S extends boolean | null | undefined | DesempenhoMensalDefaultArgs> = $Result.GetResult<Prisma.$DesempenhoMensalPayload, S>

  type DesempenhoMensalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesempenhoMensalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesempenhoMensalCountAggregateInputType | true
    }

  export interface DesempenhoMensalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesempenhoMensal'], meta: { name: 'DesempenhoMensal' } }
    /**
     * Find zero or one DesempenhoMensal that matches the filter.
     * @param {DesempenhoMensalFindUniqueArgs} args - Arguments to find a DesempenhoMensal
     * @example
     * // Get one DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesempenhoMensalFindUniqueArgs>(args: SelectSubset<T, DesempenhoMensalFindUniqueArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesempenhoMensal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesempenhoMensalFindUniqueOrThrowArgs} args - Arguments to find a DesempenhoMensal
     * @example
     * // Get one DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesempenhoMensalFindUniqueOrThrowArgs>(args: SelectSubset<T, DesempenhoMensalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesempenhoMensal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalFindFirstArgs} args - Arguments to find a DesempenhoMensal
     * @example
     * // Get one DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesempenhoMensalFindFirstArgs>(args?: SelectSubset<T, DesempenhoMensalFindFirstArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesempenhoMensal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalFindFirstOrThrowArgs} args - Arguments to find a DesempenhoMensal
     * @example
     * // Get one DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesempenhoMensalFindFirstOrThrowArgs>(args?: SelectSubset<T, DesempenhoMensalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesempenhoMensals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesempenhoMensals
     * const desempenhoMensals = await prisma.desempenhoMensal.findMany()
     * 
     * // Get first 10 DesempenhoMensals
     * const desempenhoMensals = await prisma.desempenhoMensal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const desempenhoMensalWithIdOnly = await prisma.desempenhoMensal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesempenhoMensalFindManyArgs>(args?: SelectSubset<T, DesempenhoMensalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesempenhoMensal.
     * @param {DesempenhoMensalCreateArgs} args - Arguments to create a DesempenhoMensal.
     * @example
     * // Create one DesempenhoMensal
     * const DesempenhoMensal = await prisma.desempenhoMensal.create({
     *   data: {
     *     // ... data to create a DesempenhoMensal
     *   }
     * })
     * 
     */
    create<T extends DesempenhoMensalCreateArgs>(args: SelectSubset<T, DesempenhoMensalCreateArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesempenhoMensals.
     * @param {DesempenhoMensalCreateManyArgs} args - Arguments to create many DesempenhoMensals.
     * @example
     * // Create many DesempenhoMensals
     * const desempenhoMensal = await prisma.desempenhoMensal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesempenhoMensalCreateManyArgs>(args?: SelectSubset<T, DesempenhoMensalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesempenhoMensals and returns the data saved in the database.
     * @param {DesempenhoMensalCreateManyAndReturnArgs} args - Arguments to create many DesempenhoMensals.
     * @example
     * // Create many DesempenhoMensals
     * const desempenhoMensal = await prisma.desempenhoMensal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesempenhoMensals and only return the `id`
     * const desempenhoMensalWithIdOnly = await prisma.desempenhoMensal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesempenhoMensalCreateManyAndReturnArgs>(args?: SelectSubset<T, DesempenhoMensalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesempenhoMensal.
     * @param {DesempenhoMensalDeleteArgs} args - Arguments to delete one DesempenhoMensal.
     * @example
     * // Delete one DesempenhoMensal
     * const DesempenhoMensal = await prisma.desempenhoMensal.delete({
     *   where: {
     *     // ... filter to delete one DesempenhoMensal
     *   }
     * })
     * 
     */
    delete<T extends DesempenhoMensalDeleteArgs>(args: SelectSubset<T, DesempenhoMensalDeleteArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesempenhoMensal.
     * @param {DesempenhoMensalUpdateArgs} args - Arguments to update one DesempenhoMensal.
     * @example
     * // Update one DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesempenhoMensalUpdateArgs>(args: SelectSubset<T, DesempenhoMensalUpdateArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesempenhoMensals.
     * @param {DesempenhoMensalDeleteManyArgs} args - Arguments to filter DesempenhoMensals to delete.
     * @example
     * // Delete a few DesempenhoMensals
     * const { count } = await prisma.desempenhoMensal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesempenhoMensalDeleteManyArgs>(args?: SelectSubset<T, DesempenhoMensalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesempenhoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesempenhoMensals
     * const desempenhoMensal = await prisma.desempenhoMensal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesempenhoMensalUpdateManyArgs>(args: SelectSubset<T, DesempenhoMensalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesempenhoMensals and returns the data updated in the database.
     * @param {DesempenhoMensalUpdateManyAndReturnArgs} args - Arguments to update many DesempenhoMensals.
     * @example
     * // Update many DesempenhoMensals
     * const desempenhoMensal = await prisma.desempenhoMensal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesempenhoMensals and only return the `id`
     * const desempenhoMensalWithIdOnly = await prisma.desempenhoMensal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DesempenhoMensalUpdateManyAndReturnArgs>(args: SelectSubset<T, DesempenhoMensalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesempenhoMensal.
     * @param {DesempenhoMensalUpsertArgs} args - Arguments to update or create a DesempenhoMensal.
     * @example
     * // Update or create a DesempenhoMensal
     * const desempenhoMensal = await prisma.desempenhoMensal.upsert({
     *   create: {
     *     // ... data to create a DesempenhoMensal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesempenhoMensal we want to update
     *   }
     * })
     */
    upsert<T extends DesempenhoMensalUpsertArgs>(args: SelectSubset<T, DesempenhoMensalUpsertArgs<ExtArgs>>): Prisma__DesempenhoMensalClient<$Result.GetResult<Prisma.$DesempenhoMensalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesempenhoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalCountArgs} args - Arguments to filter DesempenhoMensals to count.
     * @example
     * // Count the number of DesempenhoMensals
     * const count = await prisma.desempenhoMensal.count({
     *   where: {
     *     // ... the filter for the DesempenhoMensals we want to count
     *   }
     * })
    **/
    count<T extends DesempenhoMensalCountArgs>(
      args?: Subset<T, DesempenhoMensalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesempenhoMensalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesempenhoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesempenhoMensalAggregateArgs>(args: Subset<T, DesempenhoMensalAggregateArgs>): Prisma.PrismaPromise<GetDesempenhoMensalAggregateType<T>>

    /**
     * Group by DesempenhoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesempenhoMensalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesempenhoMensalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesempenhoMensalGroupByArgs['orderBy'] }
        : { orderBy?: DesempenhoMensalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesempenhoMensalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesempenhoMensalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesempenhoMensal model
   */
  readonly fields: DesempenhoMensalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesempenhoMensal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesempenhoMensalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DesempenhoMensal model
   */
  interface DesempenhoMensalFieldRefs {
    readonly id: FieldRef<"DesempenhoMensal", 'Int'>
    readonly mes: FieldRef<"DesempenhoMensal", 'Int'>
    readonly ano: FieldRef<"DesempenhoMensal", 'Int'>
    readonly vendas: FieldRef<"DesempenhoMensal", 'Int'>
    readonly faltas: FieldRef<"DesempenhoMensal", 'Int'>
    readonly promotorId: FieldRef<"DesempenhoMensal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DesempenhoMensal findUnique
   */
  export type DesempenhoMensalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoMensal to fetch.
     */
    where: DesempenhoMensalWhereUniqueInput
  }

  /**
   * DesempenhoMensal findUniqueOrThrow
   */
  export type DesempenhoMensalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoMensal to fetch.
     */
    where: DesempenhoMensalWhereUniqueInput
  }

  /**
   * DesempenhoMensal findFirst
   */
  export type DesempenhoMensalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoMensal to fetch.
     */
    where?: DesempenhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoMensals to fetch.
     */
    orderBy?: DesempenhoMensalOrderByWithRelationInput | DesempenhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesempenhoMensals.
     */
    cursor?: DesempenhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesempenhoMensals.
     */
    distinct?: DesempenhoMensalScalarFieldEnum | DesempenhoMensalScalarFieldEnum[]
  }

  /**
   * DesempenhoMensal findFirstOrThrow
   */
  export type DesempenhoMensalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoMensal to fetch.
     */
    where?: DesempenhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoMensals to fetch.
     */
    orderBy?: DesempenhoMensalOrderByWithRelationInput | DesempenhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesempenhoMensals.
     */
    cursor?: DesempenhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesempenhoMensals.
     */
    distinct?: DesempenhoMensalScalarFieldEnum | DesempenhoMensalScalarFieldEnum[]
  }

  /**
   * DesempenhoMensal findMany
   */
  export type DesempenhoMensalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which DesempenhoMensals to fetch.
     */
    where?: DesempenhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesempenhoMensals to fetch.
     */
    orderBy?: DesempenhoMensalOrderByWithRelationInput | DesempenhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesempenhoMensals.
     */
    cursor?: DesempenhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesempenhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesempenhoMensals.
     */
    skip?: number
    distinct?: DesempenhoMensalScalarFieldEnum | DesempenhoMensalScalarFieldEnum[]
  }

  /**
   * DesempenhoMensal create
   */
  export type DesempenhoMensalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * The data needed to create a DesempenhoMensal.
     */
    data: XOR<DesempenhoMensalCreateInput, DesempenhoMensalUncheckedCreateInput>
  }

  /**
   * DesempenhoMensal createMany
   */
  export type DesempenhoMensalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesempenhoMensals.
     */
    data: DesempenhoMensalCreateManyInput | DesempenhoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesempenhoMensal createManyAndReturn
   */
  export type DesempenhoMensalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * The data used to create many DesempenhoMensals.
     */
    data: DesempenhoMensalCreateManyInput | DesempenhoMensalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesempenhoMensal update
   */
  export type DesempenhoMensalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * The data needed to update a DesempenhoMensal.
     */
    data: XOR<DesempenhoMensalUpdateInput, DesempenhoMensalUncheckedUpdateInput>
    /**
     * Choose, which DesempenhoMensal to update.
     */
    where: DesempenhoMensalWhereUniqueInput
  }

  /**
   * DesempenhoMensal updateMany
   */
  export type DesempenhoMensalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesempenhoMensals.
     */
    data: XOR<DesempenhoMensalUpdateManyMutationInput, DesempenhoMensalUncheckedUpdateManyInput>
    /**
     * Filter which DesempenhoMensals to update
     */
    where?: DesempenhoMensalWhereInput
    /**
     * Limit how many DesempenhoMensals to update.
     */
    limit?: number
  }

  /**
   * DesempenhoMensal updateManyAndReturn
   */
  export type DesempenhoMensalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * The data used to update DesempenhoMensals.
     */
    data: XOR<DesempenhoMensalUpdateManyMutationInput, DesempenhoMensalUncheckedUpdateManyInput>
    /**
     * Filter which DesempenhoMensals to update
     */
    where?: DesempenhoMensalWhereInput
    /**
     * Limit how many DesempenhoMensals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesempenhoMensal upsert
   */
  export type DesempenhoMensalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * The filter to search for the DesempenhoMensal to update in case it exists.
     */
    where: DesempenhoMensalWhereUniqueInput
    /**
     * In case the DesempenhoMensal found by the `where` argument doesn't exist, create a new DesempenhoMensal with this data.
     */
    create: XOR<DesempenhoMensalCreateInput, DesempenhoMensalUncheckedCreateInput>
    /**
     * In case the DesempenhoMensal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesempenhoMensalUpdateInput, DesempenhoMensalUncheckedUpdateInput>
  }

  /**
   * DesempenhoMensal delete
   */
  export type DesempenhoMensalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
    /**
     * Filter which DesempenhoMensal to delete.
     */
    where: DesempenhoMensalWhereUniqueInput
  }

  /**
   * DesempenhoMensal deleteMany
   */
  export type DesempenhoMensalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesempenhoMensals to delete
     */
    where?: DesempenhoMensalWhereInput
    /**
     * Limit how many DesempenhoMensals to delete.
     */
    limit?: number
  }

  /**
   * DesempenhoMensal without action
   */
  export type DesempenhoMensalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesempenhoMensal
     */
    select?: DesempenhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesempenhoMensal
     */
    omit?: DesempenhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesempenhoMensalInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    promotorId: number | null
    usuarioId: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    promotorId: number | null
    usuarioId: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    promotorId: number | null
    usuarioId: number | null
    abordou: boolean | null
    uniformizado: boolean | null
    dominaProduto: boolean | null
    advertencia: boolean | null
    motivoAdvertencia: string | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    promotorId: number | null
    usuarioId: number | null
    abordou: boolean | null
    uniformizado: boolean | null
    dominaProduto: boolean | null
    advertencia: boolean | null
    motivoAdvertencia: string | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    promotorId: number
    usuarioId: number
    abordou: number
    uniformizado: number
    dominaProduto: number
    advertencia: number
    motivoAdvertencia: number
    observacoes: number
    criadoEm: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    promotorId?: true
    usuarioId?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    promotorId?: true
    usuarioId?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    promotorId?: true
    usuarioId?: true
    abordou?: true
    uniformizado?: true
    dominaProduto?: true
    advertencia?: true
    motivoAdvertencia?: true
    observacoes?: true
    criadoEm?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    promotorId?: true
    usuarioId?: true
    abordou?: true
    uniformizado?: true
    dominaProduto?: true
    advertencia?: true
    motivoAdvertencia?: true
    observacoes?: true
    criadoEm?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    promotorId?: true
    usuarioId?: true
    abordou?: true
    uniformizado?: true
    dominaProduto?: true
    advertencia?: true
    motivoAdvertencia?: true
    observacoes?: true
    criadoEm?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    promotorId: number
    usuarioId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia: string | null
    observacoes: string | null
    criadoEm: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promotorId?: boolean
    usuarioId?: boolean
    abordou?: boolean
    uniformizado?: boolean
    dominaProduto?: boolean
    advertencia?: boolean
    motivoAdvertencia?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promotorId?: boolean
    usuarioId?: boolean
    abordou?: boolean
    uniformizado?: boolean
    dominaProduto?: boolean
    advertencia?: boolean
    motivoAdvertencia?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promotorId?: boolean
    usuarioId?: boolean
    abordou?: boolean
    uniformizado?: boolean
    dominaProduto?: boolean
    advertencia?: boolean
    motivoAdvertencia?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    promotorId?: boolean
    usuarioId?: boolean
    abordou?: boolean
    uniformizado?: boolean
    dominaProduto?: boolean
    advertencia?: boolean
    motivoAdvertencia?: boolean
    observacoes?: boolean
    criadoEm?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "promotorId" | "usuarioId" | "abordou" | "uniformizado" | "dominaProduto" | "advertencia" | "motivoAdvertencia" | "observacoes" | "criadoEm", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      promotor: Prisma.$PromotorPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      promotorId: number
      usuarioId: number
      abordou: boolean
      uniformizado: boolean
      dominaProduto: boolean
      advertencia: boolean
      motivoAdvertencia: string | null
      observacoes: string | null
      criadoEm: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly promotorId: FieldRef<"Feedback", 'Int'>
    readonly usuarioId: FieldRef<"Feedback", 'Int'>
    readonly abordou: FieldRef<"Feedback", 'Boolean'>
    readonly uniformizado: FieldRef<"Feedback", 'Boolean'>
    readonly dominaProduto: FieldRef<"Feedback", 'Boolean'>
    readonly advertencia: FieldRef<"Feedback", 'Boolean'>
    readonly motivoAdvertencia: FieldRef<"Feedback", 'String'>
    readonly observacoes: FieldRef<"Feedback", 'String'>
    readonly criadoEm: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    matricula: 'matricula',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PromotorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    fotoUrl: 'fotoUrl',
    matricula: 'matricula',
    email: 'email',
    telefone: 'telefone'
  };

  export type PromotorScalarFieldEnum = (typeof PromotorScalarFieldEnum)[keyof typeof PromotorScalarFieldEnum]


  export const VendaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    quantidade: 'quantidade',
    promotorId: 'promotorId'
  };

  export type VendaScalarFieldEnum = (typeof VendaScalarFieldEnum)[keyof typeof VendaScalarFieldEnum]


  export const DesempenhoMensalScalarFieldEnum: {
    id: 'id',
    mes: 'mes',
    ano: 'ano',
    vendas: 'vendas',
    faltas: 'faltas',
    promotorId: 'promotorId'
  };

  export type DesempenhoMensalScalarFieldEnum = (typeof DesempenhoMensalScalarFieldEnum)[keyof typeof DesempenhoMensalScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    promotorId: 'promotorId',
    usuarioId: 'usuarioId',
    abordou: 'abordou',
    uniformizado: 'uniformizado',
    dominaProduto: 'dominaProduto',
    advertencia: 'advertencia',
    motivoAdvertencia: 'motivoAdvertencia',
    observacoes: 'observacoes',
    criadoEm: 'criadoEm'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    matricula?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    feedback?: FeedbackListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    createdAt?: SortOrder
    feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matricula?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    feedback?: FeedbackListRelationFilter
  }, "id" | "matricula">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    matricula?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PromotorWhereInput = {
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    id?: IntFilter<"Promotor"> | number
    nome?: StringFilter<"Promotor"> | string
    fotoUrl?: StringFilter<"Promotor"> | string
    matricula?: StringFilter<"Promotor"> | string
    email?: StringNullableFilter<"Promotor"> | string | null
    telefone?: StringNullableFilter<"Promotor"> | string | null
    vendas?: VendaListRelationFilter
    desempenho?: DesempenhoMensalListRelationFilter
    feedback?: FeedbackListRelationFilter
  }

  export type PromotorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fotoUrl?: SortOrder
    matricula?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    vendas?: VendaOrderByRelationAggregateInput
    desempenho?: DesempenhoMensalOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type PromotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matricula?: string
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    nome?: StringFilter<"Promotor"> | string
    fotoUrl?: StringFilter<"Promotor"> | string
    email?: StringNullableFilter<"Promotor"> | string | null
    telefone?: StringNullableFilter<"Promotor"> | string | null
    vendas?: VendaListRelationFilter
    desempenho?: DesempenhoMensalListRelationFilter
    feedback?: FeedbackListRelationFilter
  }, "id" | "matricula">

  export type PromotorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    fotoUrl?: SortOrder
    matricula?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: PromotorCountOrderByAggregateInput
    _avg?: PromotorAvgOrderByAggregateInput
    _max?: PromotorMaxOrderByAggregateInput
    _min?: PromotorMinOrderByAggregateInput
    _sum?: PromotorSumOrderByAggregateInput
  }

  export type PromotorScalarWhereWithAggregatesInput = {
    AND?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    OR?: PromotorScalarWhereWithAggregatesInput[]
    NOT?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotor"> | number
    nome?: StringWithAggregatesFilter<"Promotor"> | string
    fotoUrl?: StringWithAggregatesFilter<"Promotor"> | string
    matricula?: StringWithAggregatesFilter<"Promotor"> | string
    email?: StringNullableWithAggregatesFilter<"Promotor"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Promotor"> | string | null
  }

  export type VendaWhereInput = {
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    id?: IntFilter<"Venda"> | number
    data?: DateTimeFilter<"Venda"> | Date | string
    quantidade?: IntFilter<"Venda"> | number
    promotorId?: IntFilter<"Venda"> | number
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }

  export type VendaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
    promotor?: PromotorOrderByWithRelationInput
  }

  export type VendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    data?: DateTimeFilter<"Venda"> | Date | string
    quantidade?: IntFilter<"Venda"> | number
    promotorId?: IntFilter<"Venda"> | number
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }, "id">

  export type VendaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
    _count?: VendaCountOrderByAggregateInput
    _avg?: VendaAvgOrderByAggregateInput
    _max?: VendaMaxOrderByAggregateInput
    _min?: VendaMinOrderByAggregateInput
    _sum?: VendaSumOrderByAggregateInput
  }

  export type VendaScalarWhereWithAggregatesInput = {
    AND?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    OR?: VendaScalarWhereWithAggregatesInput[]
    NOT?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venda"> | number
    data?: DateTimeWithAggregatesFilter<"Venda"> | Date | string
    quantidade?: IntWithAggregatesFilter<"Venda"> | number
    promotorId?: IntWithAggregatesFilter<"Venda"> | number
  }

  export type DesempenhoMensalWhereInput = {
    AND?: DesempenhoMensalWhereInput | DesempenhoMensalWhereInput[]
    OR?: DesempenhoMensalWhereInput[]
    NOT?: DesempenhoMensalWhereInput | DesempenhoMensalWhereInput[]
    id?: IntFilter<"DesempenhoMensal"> | number
    mes?: IntFilter<"DesempenhoMensal"> | number
    ano?: IntFilter<"DesempenhoMensal"> | number
    vendas?: IntFilter<"DesempenhoMensal"> | number
    faltas?: IntFilter<"DesempenhoMensal"> | number
    promotorId?: IntFilter<"DesempenhoMensal"> | number
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }

  export type DesempenhoMensalOrderByWithRelationInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
    promotor?: PromotorOrderByWithRelationInput
  }

  export type DesempenhoMensalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    promotorId_mes_ano?: DesempenhoMensalPromotorIdMesAnoCompoundUniqueInput
    AND?: DesempenhoMensalWhereInput | DesempenhoMensalWhereInput[]
    OR?: DesempenhoMensalWhereInput[]
    NOT?: DesempenhoMensalWhereInput | DesempenhoMensalWhereInput[]
    mes?: IntFilter<"DesempenhoMensal"> | number
    ano?: IntFilter<"DesempenhoMensal"> | number
    vendas?: IntFilter<"DesempenhoMensal"> | number
    faltas?: IntFilter<"DesempenhoMensal"> | number
    promotorId?: IntFilter<"DesempenhoMensal"> | number
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }, "id" | "promotorId_mes_ano">

  export type DesempenhoMensalOrderByWithAggregationInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
    _count?: DesempenhoMensalCountOrderByAggregateInput
    _avg?: DesempenhoMensalAvgOrderByAggregateInput
    _max?: DesempenhoMensalMaxOrderByAggregateInput
    _min?: DesempenhoMensalMinOrderByAggregateInput
    _sum?: DesempenhoMensalSumOrderByAggregateInput
  }

  export type DesempenhoMensalScalarWhereWithAggregatesInput = {
    AND?: DesempenhoMensalScalarWhereWithAggregatesInput | DesempenhoMensalScalarWhereWithAggregatesInput[]
    OR?: DesempenhoMensalScalarWhereWithAggregatesInput[]
    NOT?: DesempenhoMensalScalarWhereWithAggregatesInput | DesempenhoMensalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
    mes?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
    ano?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
    vendas?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
    faltas?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
    promotorId?: IntWithAggregatesFilter<"DesempenhoMensal"> | number
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    promotorId?: IntFilter<"Feedback"> | number
    usuarioId?: IntFilter<"Feedback"> | number
    abordou?: BoolFilter<"Feedback"> | boolean
    uniformizado?: BoolFilter<"Feedback"> | boolean
    dominaProduto?: BoolFilter<"Feedback"> | boolean
    advertencia?: BoolFilter<"Feedback"> | boolean
    motivoAdvertencia?: StringNullableFilter<"Feedback"> | string | null
    observacoes?: StringNullableFilter<"Feedback"> | string | null
    criadoEm?: DateTimeFilter<"Feedback"> | Date | string
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
    abordou?: SortOrder
    uniformizado?: SortOrder
    dominaProduto?: SortOrder
    advertencia?: SortOrder
    motivoAdvertencia?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    promotor?: PromotorOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    promotorId?: IntFilter<"Feedback"> | number
    usuarioId?: IntFilter<"Feedback"> | number
    abordou?: BoolFilter<"Feedback"> | boolean
    uniformizado?: BoolFilter<"Feedback"> | boolean
    dominaProduto?: BoolFilter<"Feedback"> | boolean
    advertencia?: BoolFilter<"Feedback"> | boolean
    motivoAdvertencia?: StringNullableFilter<"Feedback"> | string | null
    observacoes?: StringNullableFilter<"Feedback"> | string | null
    criadoEm?: DateTimeFilter<"Feedback"> | Date | string
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
    abordou?: SortOrder
    uniformizado?: SortOrder
    dominaProduto?: SortOrder
    advertencia?: SortOrder
    motivoAdvertencia?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    promotorId?: IntWithAggregatesFilter<"Feedback"> | number
    usuarioId?: IntWithAggregatesFilter<"Feedback"> | number
    abordou?: BoolWithAggregatesFilter<"Feedback"> | boolean
    uniformizado?: BoolWithAggregatesFilter<"Feedback"> | boolean
    dominaProduto?: BoolWithAggregatesFilter<"Feedback"> | boolean
    advertencia?: BoolWithAggregatesFilter<"Feedback"> | boolean
    motivoAdvertencia?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt?: Date | string
    feedback?: FeedbackCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorCreateInput = {
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaCreateNestedManyWithoutPromotorInput
    desempenho?: DesempenhoMensalCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateInput = {
    id?: number
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaUncheckedCreateNestedManyWithoutPromotorInput
    desempenho?: DesempenhoMensalUncheckedCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUpdateManyWithoutPromotorNestedInput
    desempenho?: DesempenhoMensalUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUncheckedUpdateManyWithoutPromotorNestedInput
    desempenho?: DesempenhoMensalUncheckedUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateManyInput = {
    id?: number
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
  }

  export type PromotorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendaCreateInput = {
    data?: Date | string
    quantidade: number
    promotor: PromotorCreateNestedOneWithoutVendasInput
  }

  export type VendaUncheckedCreateInput = {
    id?: number
    data?: Date | string
    quantidade: number
    promotorId: number
  }

  export type VendaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    promotor?: PromotorUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type VendaCreateManyInput = {
    id?: number
    data?: Date | string
    quantidade: number
    promotorId: number
  }

  export type VendaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalCreateInput = {
    mes: number
    ano: number
    vendas: number
    faltas: number
    promotor: PromotorCreateNestedOneWithoutDesempenhoInput
  }

  export type DesempenhoMensalUncheckedCreateInput = {
    id?: number
    mes: number
    ano: number
    vendas: number
    faltas: number
    promotorId: number
  }

  export type DesempenhoMensalUpdateInput = {
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
    promotor?: PromotorUpdateOneRequiredWithoutDesempenhoNestedInput
  }

  export type DesempenhoMensalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalCreateManyInput = {
    id?: number
    mes: number
    ano: number
    vendas: number
    faltas: number
    promotorId: number
  }

  export type DesempenhoMensalUpdateManyMutationInput = {
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackCreateInput = {
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    promotor: PromotorCreateNestedOneWithoutFeedbackInput
    usuario: UsuarioCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    promotorId: number
    usuarioId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type FeedbackUpdateInput = {
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutFeedbackNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    promotorId: number
    usuarioId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    matricula?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VendaListRelationFilter = {
    every?: VendaWhereInput
    some?: VendaWhereInput
    none?: VendaWhereInput
  }

  export type DesempenhoMensalListRelationFilter = {
    every?: DesempenhoMensalWhereInput
    some?: DesempenhoMensalWhereInput
    none?: DesempenhoMensalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesempenhoMensalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fotoUrl?: SortOrder
    matricula?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type PromotorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromotorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fotoUrl?: SortOrder
    matricula?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type PromotorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fotoUrl?: SortOrder
    matricula?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type PromotorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PromotorScalarRelationFilter = {
    is?: PromotorWhereInput
    isNot?: PromotorWhereInput
  }

  export type VendaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
  }

  export type VendaAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
  }

  export type VendaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
  }

  export type VendaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
  }

  export type VendaSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    promotorId?: SortOrder
  }

  export type DesempenhoMensalPromotorIdMesAnoCompoundUniqueInput = {
    promotorId: number
    mes: number
    ano: number
  }

  export type DesempenhoMensalCountOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
  }

  export type DesempenhoMensalAvgOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
  }

  export type DesempenhoMensalMaxOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
  }

  export type DesempenhoMensalMinOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
  }

  export type DesempenhoMensalSumOrderByAggregateInput = {
    id?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    vendas?: SortOrder
    faltas?: SortOrder
    promotorId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
    abordou?: SortOrder
    uniformizado?: SortOrder
    dominaProduto?: SortOrder
    advertencia?: SortOrder
    motivoAdvertencia?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
    abordou?: SortOrder
    uniformizado?: SortOrder
    dominaProduto?: SortOrder
    advertencia?: SortOrder
    motivoAdvertencia?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
    abordou?: SortOrder
    uniformizado?: SortOrder
    dominaProduto?: SortOrder
    advertencia?: SortOrder
    motivoAdvertencia?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FeedbackCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FeedbackUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUsuarioInput | FeedbackUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUsuarioInput | FeedbackUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUsuarioInput | FeedbackUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUsuarioInput | FeedbackUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUsuarioInput | FeedbackUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUsuarioInput | FeedbackUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type VendaCreateNestedManyWithoutPromotorInput = {
    create?: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput> | VendaCreateWithoutPromotorInput[] | VendaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutPromotorInput | VendaCreateOrConnectWithoutPromotorInput[]
    createMany?: VendaCreateManyPromotorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type DesempenhoMensalCreateNestedManyWithoutPromotorInput = {
    create?: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput> | DesempenhoMensalCreateWithoutPromotorInput[] | DesempenhoMensalUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: DesempenhoMensalCreateOrConnectWithoutPromotorInput | DesempenhoMensalCreateOrConnectWithoutPromotorInput[]
    createMany?: DesempenhoMensalCreateManyPromotorInputEnvelope
    connect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutPromotorInput = {
    create?: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput> | FeedbackCreateWithoutPromotorInput[] | FeedbackUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPromotorInput | FeedbackCreateOrConnectWithoutPromotorInput[]
    createMany?: FeedbackCreateManyPromotorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type VendaUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput> | VendaCreateWithoutPromotorInput[] | VendaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutPromotorInput | VendaCreateOrConnectWithoutPromotorInput[]
    createMany?: VendaCreateManyPromotorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type DesempenhoMensalUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput> | DesempenhoMensalCreateWithoutPromotorInput[] | DesempenhoMensalUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: DesempenhoMensalCreateOrConnectWithoutPromotorInput | DesempenhoMensalCreateOrConnectWithoutPromotorInput[]
    createMany?: DesempenhoMensalCreateManyPromotorInputEnvelope
    connect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput> | FeedbackCreateWithoutPromotorInput[] | FeedbackUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPromotorInput | FeedbackCreateOrConnectWithoutPromotorInput[]
    createMany?: FeedbackCreateManyPromotorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VendaUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput> | VendaCreateWithoutPromotorInput[] | VendaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutPromotorInput | VendaCreateOrConnectWithoutPromotorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutPromotorInput | VendaUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: VendaCreateManyPromotorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutPromotorInput | VendaUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutPromotorInput | VendaUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type DesempenhoMensalUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput> | DesempenhoMensalCreateWithoutPromotorInput[] | DesempenhoMensalUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: DesempenhoMensalCreateOrConnectWithoutPromotorInput | DesempenhoMensalCreateOrConnectWithoutPromotorInput[]
    upsert?: DesempenhoMensalUpsertWithWhereUniqueWithoutPromotorInput | DesempenhoMensalUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: DesempenhoMensalCreateManyPromotorInputEnvelope
    set?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    disconnect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    delete?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    connect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    update?: DesempenhoMensalUpdateWithWhereUniqueWithoutPromotorInput | DesempenhoMensalUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: DesempenhoMensalUpdateManyWithWhereWithoutPromotorInput | DesempenhoMensalUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: DesempenhoMensalScalarWhereInput | DesempenhoMensalScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput> | FeedbackCreateWithoutPromotorInput[] | FeedbackUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPromotorInput | FeedbackCreateOrConnectWithoutPromotorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPromotorInput | FeedbackUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: FeedbackCreateManyPromotorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPromotorInput | FeedbackUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPromotorInput | FeedbackUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type VendaUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput> | VendaCreateWithoutPromotorInput[] | VendaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutPromotorInput | VendaCreateOrConnectWithoutPromotorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutPromotorInput | VendaUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: VendaCreateManyPromotorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutPromotorInput | VendaUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutPromotorInput | VendaUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type DesempenhoMensalUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput> | DesempenhoMensalCreateWithoutPromotorInput[] | DesempenhoMensalUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: DesempenhoMensalCreateOrConnectWithoutPromotorInput | DesempenhoMensalCreateOrConnectWithoutPromotorInput[]
    upsert?: DesempenhoMensalUpsertWithWhereUniqueWithoutPromotorInput | DesempenhoMensalUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: DesempenhoMensalCreateManyPromotorInputEnvelope
    set?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    disconnect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    delete?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    connect?: DesempenhoMensalWhereUniqueInput | DesempenhoMensalWhereUniqueInput[]
    update?: DesempenhoMensalUpdateWithWhereUniqueWithoutPromotorInput | DesempenhoMensalUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: DesempenhoMensalUpdateManyWithWhereWithoutPromotorInput | DesempenhoMensalUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: DesempenhoMensalScalarWhereInput | DesempenhoMensalScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput> | FeedbackCreateWithoutPromotorInput[] | FeedbackUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutPromotorInput | FeedbackCreateOrConnectWithoutPromotorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutPromotorInput | FeedbackUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: FeedbackCreateManyPromotorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutPromotorInput | FeedbackUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutPromotorInput | FeedbackUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type PromotorCreateNestedOneWithoutVendasInput = {
    create?: XOR<PromotorCreateWithoutVendasInput, PromotorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutVendasInput
    connect?: PromotorWhereUniqueInput
  }

  export type PromotorUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<PromotorCreateWithoutVendasInput, PromotorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutVendasInput
    upsert?: PromotorUpsertWithoutVendasInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutVendasInput, PromotorUpdateWithoutVendasInput>, PromotorUncheckedUpdateWithoutVendasInput>
  }

  export type PromotorCreateNestedOneWithoutDesempenhoInput = {
    create?: XOR<PromotorCreateWithoutDesempenhoInput, PromotorUncheckedCreateWithoutDesempenhoInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutDesempenhoInput
    connect?: PromotorWhereUniqueInput
  }

  export type PromotorUpdateOneRequiredWithoutDesempenhoNestedInput = {
    create?: XOR<PromotorCreateWithoutDesempenhoInput, PromotorUncheckedCreateWithoutDesempenhoInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutDesempenhoInput
    upsert?: PromotorUpsertWithoutDesempenhoInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutDesempenhoInput, PromotorUpdateWithoutDesempenhoInput>, PromotorUncheckedUpdateWithoutDesempenhoInput>
  }

  export type PromotorCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<PromotorCreateWithoutFeedbackInput, PromotorUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutFeedbackInput
    connect?: PromotorWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UsuarioCreateWithoutFeedbackInput, UsuarioUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeedbackInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PromotorUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<PromotorCreateWithoutFeedbackInput, PromotorUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutFeedbackInput
    upsert?: PromotorUpsertWithoutFeedbackInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutFeedbackInput, PromotorUpdateWithoutFeedbackInput>, PromotorUncheckedUpdateWithoutFeedbackInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<UsuarioCreateWithoutFeedbackInput, UsuarioUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeedbackInput
    upsert?: UsuarioUpsertWithoutFeedbackInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFeedbackInput, UsuarioUpdateWithoutFeedbackInput>, UsuarioUncheckedUpdateWithoutFeedbackInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FeedbackCreateWithoutUsuarioInput = {
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    promotor: PromotorCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutUsuarioInput = {
    id?: number
    promotorId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput>
  }

  export type FeedbackCreateManyUsuarioInputEnvelope = {
    data: FeedbackCreateManyUsuarioInput | FeedbackCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUsuarioInput, FeedbackUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUsuarioInput, FeedbackUncheckedUpdateWithoutUsuarioInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUsuarioInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    promotorId?: IntFilter<"Feedback"> | number
    usuarioId?: IntFilter<"Feedback"> | number
    abordou?: BoolFilter<"Feedback"> | boolean
    uniformizado?: BoolFilter<"Feedback"> | boolean
    dominaProduto?: BoolFilter<"Feedback"> | boolean
    advertencia?: BoolFilter<"Feedback"> | boolean
    motivoAdvertencia?: StringNullableFilter<"Feedback"> | string | null
    observacoes?: StringNullableFilter<"Feedback"> | string | null
    criadoEm?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type VendaCreateWithoutPromotorInput = {
    data?: Date | string
    quantidade: number
  }

  export type VendaUncheckedCreateWithoutPromotorInput = {
    id?: number
    data?: Date | string
    quantidade: number
  }

  export type VendaCreateOrConnectWithoutPromotorInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput>
  }

  export type VendaCreateManyPromotorInputEnvelope = {
    data: VendaCreateManyPromotorInput | VendaCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type DesempenhoMensalCreateWithoutPromotorInput = {
    mes: number
    ano: number
    vendas: number
    faltas: number
  }

  export type DesempenhoMensalUncheckedCreateWithoutPromotorInput = {
    id?: number
    mes: number
    ano: number
    vendas: number
    faltas: number
  }

  export type DesempenhoMensalCreateOrConnectWithoutPromotorInput = {
    where: DesempenhoMensalWhereUniqueInput
    create: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput>
  }

  export type DesempenhoMensalCreateManyPromotorInputEnvelope = {
    data: DesempenhoMensalCreateManyPromotorInput | DesempenhoMensalCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutPromotorInput = {
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutPromotorInput = {
    id?: number
    usuarioId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutPromotorInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput>
  }

  export type FeedbackCreateManyPromotorInputEnvelope = {
    data: FeedbackCreateManyPromotorInput | FeedbackCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type VendaUpsertWithWhereUniqueWithoutPromotorInput = {
    where: VendaWhereUniqueInput
    update: XOR<VendaUpdateWithoutPromotorInput, VendaUncheckedUpdateWithoutPromotorInput>
    create: XOR<VendaCreateWithoutPromotorInput, VendaUncheckedCreateWithoutPromotorInput>
  }

  export type VendaUpdateWithWhereUniqueWithoutPromotorInput = {
    where: VendaWhereUniqueInput
    data: XOR<VendaUpdateWithoutPromotorInput, VendaUncheckedUpdateWithoutPromotorInput>
  }

  export type VendaUpdateManyWithWhereWithoutPromotorInput = {
    where: VendaScalarWhereInput
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyWithoutPromotorInput>
  }

  export type VendaScalarWhereInput = {
    AND?: VendaScalarWhereInput | VendaScalarWhereInput[]
    OR?: VendaScalarWhereInput[]
    NOT?: VendaScalarWhereInput | VendaScalarWhereInput[]
    id?: IntFilter<"Venda"> | number
    data?: DateTimeFilter<"Venda"> | Date | string
    quantidade?: IntFilter<"Venda"> | number
    promotorId?: IntFilter<"Venda"> | number
  }

  export type DesempenhoMensalUpsertWithWhereUniqueWithoutPromotorInput = {
    where: DesempenhoMensalWhereUniqueInput
    update: XOR<DesempenhoMensalUpdateWithoutPromotorInput, DesempenhoMensalUncheckedUpdateWithoutPromotorInput>
    create: XOR<DesempenhoMensalCreateWithoutPromotorInput, DesempenhoMensalUncheckedCreateWithoutPromotorInput>
  }

  export type DesempenhoMensalUpdateWithWhereUniqueWithoutPromotorInput = {
    where: DesempenhoMensalWhereUniqueInput
    data: XOR<DesempenhoMensalUpdateWithoutPromotorInput, DesempenhoMensalUncheckedUpdateWithoutPromotorInput>
  }

  export type DesempenhoMensalUpdateManyWithWhereWithoutPromotorInput = {
    where: DesempenhoMensalScalarWhereInput
    data: XOR<DesempenhoMensalUpdateManyMutationInput, DesempenhoMensalUncheckedUpdateManyWithoutPromotorInput>
  }

  export type DesempenhoMensalScalarWhereInput = {
    AND?: DesempenhoMensalScalarWhereInput | DesempenhoMensalScalarWhereInput[]
    OR?: DesempenhoMensalScalarWhereInput[]
    NOT?: DesempenhoMensalScalarWhereInput | DesempenhoMensalScalarWhereInput[]
    id?: IntFilter<"DesempenhoMensal"> | number
    mes?: IntFilter<"DesempenhoMensal"> | number
    ano?: IntFilter<"DesempenhoMensal"> | number
    vendas?: IntFilter<"DesempenhoMensal"> | number
    faltas?: IntFilter<"DesempenhoMensal"> | number
    promotorId?: IntFilter<"DesempenhoMensal"> | number
  }

  export type FeedbackUpsertWithWhereUniqueWithoutPromotorInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutPromotorInput, FeedbackUncheckedUpdateWithoutPromotorInput>
    create: XOR<FeedbackCreateWithoutPromotorInput, FeedbackUncheckedCreateWithoutPromotorInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutPromotorInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutPromotorInput, FeedbackUncheckedUpdateWithoutPromotorInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutPromotorInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutPromotorInput>
  }

  export type PromotorCreateWithoutVendasInput = {
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    desempenho?: DesempenhoMensalCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateWithoutVendasInput = {
    id?: number
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    desempenho?: DesempenhoMensalUncheckedCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorCreateOrConnectWithoutVendasInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutVendasInput, PromotorUncheckedCreateWithoutVendasInput>
  }

  export type PromotorUpsertWithoutVendasInput = {
    update: XOR<PromotorUpdateWithoutVendasInput, PromotorUncheckedUpdateWithoutVendasInput>
    create: XOR<PromotorCreateWithoutVendasInput, PromotorUncheckedCreateWithoutVendasInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutVendasInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutVendasInput, PromotorUncheckedUpdateWithoutVendasInput>
  }

  export type PromotorUpdateWithoutVendasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    desempenho?: DesempenhoMensalUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateWithoutVendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    desempenho?: DesempenhoMensalUncheckedUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateWithoutDesempenhoInput = {
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateWithoutDesempenhoInput = {
    id?: number
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaUncheckedCreateNestedManyWithoutPromotorInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorCreateOrConnectWithoutDesempenhoInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutDesempenhoInput, PromotorUncheckedCreateWithoutDesempenhoInput>
  }

  export type PromotorUpsertWithoutDesempenhoInput = {
    update: XOR<PromotorUpdateWithoutDesempenhoInput, PromotorUncheckedUpdateWithoutDesempenhoInput>
    create: XOR<PromotorCreateWithoutDesempenhoInput, PromotorUncheckedCreateWithoutDesempenhoInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutDesempenhoInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutDesempenhoInput, PromotorUncheckedUpdateWithoutDesempenhoInput>
  }

  export type PromotorUpdateWithoutDesempenhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateWithoutDesempenhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUncheckedUpdateManyWithoutPromotorNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateWithoutFeedbackInput = {
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaCreateNestedManyWithoutPromotorInput
    desempenho?: DesempenhoMensalCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateWithoutFeedbackInput = {
    id?: number
    nome: string
    fotoUrl: string
    matricula: string
    email?: string | null
    telefone?: string | null
    vendas?: VendaUncheckedCreateNestedManyWithoutPromotorInput
    desempenho?: DesempenhoMensalUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorCreateOrConnectWithoutFeedbackInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutFeedbackInput, PromotorUncheckedCreateWithoutFeedbackInput>
  }

  export type UsuarioCreateWithoutFeedbackInput = {
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutFeedbackInput = {
    id?: number
    nome: string
    email: string
    senha: string
    matricula: string
    createdAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutFeedbackInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFeedbackInput, UsuarioUncheckedCreateWithoutFeedbackInput>
  }

  export type PromotorUpsertWithoutFeedbackInput = {
    update: XOR<PromotorUpdateWithoutFeedbackInput, PromotorUncheckedUpdateWithoutFeedbackInput>
    create: XOR<PromotorCreateWithoutFeedbackInput, PromotorUncheckedCreateWithoutFeedbackInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutFeedbackInput, PromotorUncheckedUpdateWithoutFeedbackInput>
  }

  export type PromotorUpdateWithoutFeedbackInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUpdateManyWithoutPromotorNestedInput
    desempenho?: DesempenhoMensalUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendaUncheckedUpdateManyWithoutPromotorNestedInput
    desempenho?: DesempenhoMensalUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type UsuarioUpsertWithoutFeedbackInput = {
    update: XOR<UsuarioUpdateWithoutFeedbackInput, UsuarioUncheckedUpdateWithoutFeedbackInput>
    create: XOR<UsuarioCreateWithoutFeedbackInput, UsuarioUncheckedCreateWithoutFeedbackInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFeedbackInput, UsuarioUncheckedUpdateWithoutFeedbackInput>
  }

  export type UsuarioUpdateWithoutFeedbackInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyUsuarioInput = {
    id?: number
    promotorId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type FeedbackUpdateWithoutUsuarioInput = {
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendaCreateManyPromotorInput = {
    id?: number
    data?: Date | string
    quantidade: number
  }

  export type DesempenhoMensalCreateManyPromotorInput = {
    id?: number
    mes: number
    ano: number
    vendas: number
    faltas: number
  }

  export type FeedbackCreateManyPromotorInput = {
    id?: number
    usuarioId: number
    abordou: boolean
    uniformizado: boolean
    dominaProduto: boolean
    advertencia: boolean
    motivoAdvertencia?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type VendaUpdateWithoutPromotorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type VendaUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalUpdateWithoutPromotorInput = {
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
  }

  export type DesempenhoMensalUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    vendas?: IntFieldUpdateOperationsInput | number
    faltas?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackUpdateWithoutPromotorInput = {
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    abordou?: BoolFieldUpdateOperationsInput | boolean
    uniformizado?: BoolFieldUpdateOperationsInput | boolean
    dominaProduto?: BoolFieldUpdateOperationsInput | boolean
    advertencia?: BoolFieldUpdateOperationsInput | boolean
    motivoAdvertencia?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}