import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { useFetchData } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type GqlAddress = {
  __typename?: 'GqlAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type GqlAuthOutput = {
  __typename?: 'GqlAuthOutput';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  joinDate: Scalars['DateTime'];
  lastName: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type GqlCategory = {
  __typename?: 'GqlCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<GqlProduct>;
};

export type GqlLoggedUser = {
  __typename?: 'GqlLoggedUser';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  joinDate: Scalars['DateTime'];
  lastName: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type GqlNewAddressOutput = {
  __typename?: 'GqlNewAddressOutput';
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type GqlNewOrderedItem = {
  idProduct: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type GqlOrder = {
  __typename?: 'GqlOrder';
  createdAt: Scalars['DateTime'];
  creditCardNumber: Scalars['String'];
  id: Scalars['ID'];
  idCreditCard: Scalars['ID'];
  idUser: Scalars['ID'];
  items: Array<GqlOrderedItem>;
};

export type GqlOrderedItem = {
  __typename?: 'GqlOrderedItem';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type GqlPaginatedProductsFiltersInput = {
  availableStock?: InputMaybe<Scalars['Boolean']>;
  categoriesIds?: InputMaybe<Array<Scalars['Int']>>;
  price?: InputMaybe<Scalars['Int']>;
  priceCondition?: InputMaybe<NumberCondition>;
  text?: InputMaybe<Scalars['String']>;
};

export type GqlPaginatedProductsOutput = {
  __typename?: 'GqlPaginatedProductsOutput';
  data: Array<GqlProduct>;
  hasMoreData: Scalars['Boolean'];
  id: Scalars['Int'];
};

export type GqlPaginatedProductsSortingInput = {
  direction?: InputMaybe<SortDirection>;
  field?: InputMaybe<SortField>;
};

export type GqlPaginationArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GqlPartialCreditCard = {
  __typename?: 'GqlPartialCreditCard';
  expires: Scalars['String'];
  number: Scalars['String'];
};

export type GqlPartialOrderedItem = {
  __typename?: 'GqlPartialOrderedItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type GqlPlaceOrderInput = {
  cvc: Scalars['String'];
  expires: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['String'];
};

export type GqlPlaceOrderOutput = {
  __typename?: 'GqlPlaceOrderOutput';
  orderId: Scalars['Int'];
};

export type GqlProduct = {
  __typename?: 'GqlProduct';
  category: GqlCategory;
  description: Scalars['String'];
  id: Scalars['ID'];
  idCategory: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
};

export type GqlUserOrder = {
  __typename?: 'GqlUserOrder';
  createdAt: Scalars['DateTime'];
  creditCard: GqlPartialCreditCard;
  items: Array<GqlPartialOrderedItem>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: GqlNewAddressOutput;
  login: GqlAuthOutput;
  placeOrder: GqlPlaceOrderOutput;
  signup: GqlAuthOutput;
};

export type MutationCreateAddressArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  zipCode: Scalars['String'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationPlaceOrderArgs = {
  creditCard: GqlPlaceOrderInput;
  orderedItems: Array<GqlNewOrderedItem>;
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export enum NumberCondition {
  Gte = 'gte',
  Lte = 'lte',
}

export type Query = {
  __typename?: 'Query';
  categories: Array<GqlCategory>;
  category: GqlCategory;
  getOrder: GqlUserOrder;
  me: GqlLoggedUser;
  myAddresses: Array<GqlAddress>;
  myOrders: Array<GqlOrder>;
  product: GqlProduct;
  products: Array<GqlProduct>;
  productsByPage: GqlPaginatedProductsOutput;
  productsWithIds: Array<GqlProduct>;
};

export type QueryCategoryArgs = {
  id: Scalars['Int'];
};

export type QueryGetOrderArgs = {
  id: Scalars['Int'];
};

export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type QueryProductsByPageArgs = {
  filters: GqlPaginatedProductsFiltersInput;
  pagination: GqlPaginationArgs;
  sort: GqlPaginatedProductsSortingInput;
};

export type QueryProductsWithIdsArgs = {
  ids: Array<Scalars['Int']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum SortField {
  Name = 'name',
  Price = 'price',
}

export type NewAddressMutationVariables = Exact<{
  street: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}>;

export type NewAddressMutation = {
  __typename?: 'Mutation';
  createAddress: {
    __typename?: 'GqlNewAddressOutput';
    id: string;
    street: string;
    zipCode: string;
    city: string;
    country: string;
  };
};

export type GetOrderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  getOrder: {
    __typename?: 'GqlUserOrder';
    createdAt: any;
    creditCard: {
      __typename?: 'GqlPartialCreditCard';
      number: string;
      expires: string;
    };
    items: Array<{
      __typename?: 'GqlPartialOrderedItem';
      id: string;
      name: string;
      quantity: number;
      price: number;
    }>;
  };
};

export type PlaceOrderMutationVariables = Exact<{
  creditCard: GqlPlaceOrderInput;
  orderedItems: Array<GqlNewOrderedItem> | GqlNewOrderedItem;
}>;

export type PlaceOrderMutation = {
  __typename?: 'Mutation';
  placeOrder: { __typename?: 'GqlPlaceOrderOutput'; orderId: number };
};

export type MyAddressesQueryVariables = Exact<{ [key: string]: never }>;

export type MyAddressesQuery = {
  __typename?: 'Query';
  myAddresses: Array<{
    __typename?: 'GqlAddress';
    id: string;
    street: string;
    zipCode: string;
    city: string;
    country: string;
  }>;
};

export type ProductsByPageQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  text?: InputMaybe<Scalars['String']>;
  categoriesIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  availableStock?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  priceCondition?: InputMaybe<NumberCondition>;
  sortField?: InputMaybe<SortField>;
  sortDirection?: InputMaybe<SortDirection>;
}>;

export type ProductsByPageQuery = {
  __typename?: 'Query';
  productsByPage: {
    __typename?: 'GqlPaginatedProductsOutput';
    hasMoreData: boolean;
    data: Array<{
      __typename?: 'GqlProduct';
      id: string;
      name: string;
      description: string;
      image: string;
      price: number;
      stock: number;
      category: { __typename?: 'GqlCategory'; id: string; name: string };
    }>;
  };
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = {
  __typename?: 'Query';
  products: Array<{
    __typename?: 'GqlProduct';
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: { __typename?: 'GqlCategory'; id: string; name: string };
  }>;
};

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: { __typename?: 'GqlAuthOutput'; id: string; token: string };
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesQuery = {
  __typename?: 'Query';
  categories: Array<{
    __typename?: 'GqlCategory';
    id: string;
    name: string;
    products: Array<{
      __typename?: 'GqlProduct';
      id: string;
      name: string;
      description: string;
      price: number;
    }>;
  }>;
};

export type CategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type CategoryQuery = {
  __typename?: 'Query';
  category: {
    __typename?: 'GqlCategory';
    id: string;
    name: string;
    products: Array<{
      __typename?: 'GqlProduct';
      id: string;
      name: string;
      description: string;
      price: number;
    }>;
  };
};

export type ProductsWithIdsQueryVariables = Exact<{
  ids: Array<Scalars['Int']> | Scalars['Int'];
}>;

export type ProductsWithIdsQuery = {
  __typename?: 'Query';
  productsWithIds: Array<{
    __typename?: 'GqlProduct';
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
  }>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'GqlAuthOutput';
    id: string;
    token: string;
    email: string;
    firstName: string;
    lastName: string;
  };
};

export const NewAddressDocument = /*#__PURE__*/ `
    mutation NewAddress($street: String!, $zipCode: String!, $city: String!, $country: String!) {
  createAddress(
    street: $street
    zipCode: $zipCode
    city: $city
    country: $country
  ) {
    id
    street
    zipCode
    city
    country
  }
}
    `;
export const useNewAddressMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    NewAddressMutation,
    TError,
    NewAddressMutationVariables,
    TContext
  >
) =>
  useMutation<
    NewAddressMutation,
    TError,
    NewAddressMutationVariables,
    TContext
  >(
    ['NewAddress'],
    useFetchData<NewAddressMutation, NewAddressMutationVariables>(
      NewAddressDocument
    ),
    options
  );
export const GetOrderDocument = /*#__PURE__*/ `
    query GetOrder($id: Int!) {
  getOrder(id: $id) {
    createdAt
    creditCard {
      number
      expires
    }
    items {
      id
      name
      quantity
      price
    }
  }
}
    `;
export const useGetOrderQuery = <TData = GetOrderQuery, TError = unknown>(
  variables: GetOrderQueryVariables,
  options?: UseQueryOptions<GetOrderQuery, TError, TData>
) =>
  useQuery<GetOrderQuery, TError, TData>(
    ['GetOrder', variables],
    useFetchData<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument).bind(
      null,
      variables
    ),
    options
  );

export const PlaceOrderDocument = /*#__PURE__*/ `
    mutation PlaceOrder($creditCard: GqlPlaceOrderInput!, $orderedItems: [GqlNewOrderedItem!]!) {
  placeOrder(creditCard: $creditCard, orderedItems: $orderedItems) {
    orderId
  }
}
    `;
export const usePlaceOrderMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    PlaceOrderMutation,
    TError,
    PlaceOrderMutationVariables,
    TContext
  >
) =>
  useMutation<
    PlaceOrderMutation,
    TError,
    PlaceOrderMutationVariables,
    TContext
  >(
    ['PlaceOrder'],
    useFetchData<PlaceOrderMutation, PlaceOrderMutationVariables>(
      PlaceOrderDocument
    ),
    options
  );
export const MyAddressesDocument = /*#__PURE__*/ `
    query MyAddresses {
  myAddresses {
    id
    street
    zipCode
    city
    country
  }
}
    `;
export const useMyAddressesQuery = <TData = MyAddressesQuery, TError = unknown>(
  variables?: MyAddressesQueryVariables,
  options?: UseQueryOptions<MyAddressesQuery, TError, TData>
) =>
  useQuery<MyAddressesQuery, TError, TData>(
    variables === undefined ? ['MyAddresses'] : ['MyAddresses', variables],
    useFetchData<MyAddressesQuery, MyAddressesQueryVariables>(
      MyAddressesDocument
    ).bind(null, variables),
    options
  );

export const ProductsByPageDocument = /*#__PURE__*/ `
    query ProductsByPage($offset: Int!, $limit: Int!, $text: String, $categoriesIds: [Int!], $availableStock: Boolean, $price: Int, $priceCondition: NumberCondition, $sortField: SortField, $sortDirection: SortDirection) {
  productsByPage(
    pagination: {offset: $offset, limit: $limit}
    filters: {text: $text, categoriesIds: $categoriesIds, availableStock: $availableStock, price: $price, priceCondition: $priceCondition}
    sort: {field: $sortField, direction: $sortDirection}
  ) {
    data {
      id
      name
      description
      image
      price
      stock
      category {
        id
        name
      }
    }
    hasMoreData
  }
}
    `;
export const useProductsByPageQuery = <
  TData = ProductsByPageQuery,
  TError = unknown
>(
  variables: ProductsByPageQueryVariables,
  options?: UseQueryOptions<ProductsByPageQuery, TError, TData>
) =>
  useQuery<ProductsByPageQuery, TError, TData>(
    ['ProductsByPage', variables],
    useFetchData<ProductsByPageQuery, ProductsByPageQueryVariables>(
      ProductsByPageDocument
    ).bind(null, variables),
    options
  );
export const useInfiniteProductsByPageQuery = <
  TData = ProductsByPageQuery,
  TError = unknown
>(
  variables: ProductsByPageQueryVariables,
  options?: UseInfiniteQueryOptions<ProductsByPageQuery, TError, TData>
) => {
  const query = useFetchData<ProductsByPageQuery, ProductsByPageQueryVariables>(
    ProductsByPageDocument
  );
  return useInfiniteQuery<ProductsByPageQuery, TError, TData>(
    ['ProductsByPage.infinite', variables],
    (metaData) => query({ ...variables, ...(metaData.pageParam ?? {}) }),
    options
  );
};

export const ProductsDocument = /*#__PURE__*/ `
    query Products {
  products {
    id
    name
    description
    image
    price
    stock
    category {
      id
      name
    }
  }
}
    `;
export const useProductsQuery = <TData = ProductsQuery, TError = unknown>(
  variables?: ProductsQueryVariables,
  options?: UseQueryOptions<ProductsQuery, TError, TData>
) =>
  useQuery<ProductsQuery, TError, TData>(
    variables === undefined ? ['Products'] : ['Products', variables],
    useFetchData<ProductsQuery, ProductsQueryVariables>(ProductsDocument).bind(
      null,
      variables
    ),
    options
  );

export const SignupDocument = /*#__PURE__*/ `
    mutation Signup($email: String!, $lastName: String!, $firstName: String!, $password: String!) {
  signup(
    email: $email
    lastName: $lastName
    firstName: $firstName
    password: $password
  ) {
    id
    token
  }
}
    `;
export const useSignupMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SignupMutation,
    TError,
    SignupMutationVariables,
    TContext
  >
) =>
  useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
    ['Signup'],
    useFetchData<SignupMutation, SignupMutationVariables>(SignupDocument),
    options
  );
export const CategoriesDocument = /*#__PURE__*/ `
    query Categories {
  categories {
    id
    name
    products {
      id
      name
      description
      price
    }
  }
}
    `;
export const useCategoriesQuery = <TData = CategoriesQuery, TError = unknown>(
  variables?: CategoriesQueryVariables,
  options?: UseQueryOptions<CategoriesQuery, TError, TData>
) =>
  useQuery<CategoriesQuery, TError, TData>(
    variables === undefined ? ['Categories'] : ['Categories', variables],
    useFetchData<CategoriesQuery, CategoriesQueryVariables>(
      CategoriesDocument
    ).bind(null, variables),
    options
  );

export const CategoryDocument = /*#__PURE__*/ `
    query Category($id: Int!) {
  category(id: $id) {
    id
    name
    products {
      id
      name
      description
      price
    }
  }
}
    `;
export const useCategoryQuery = <TData = CategoryQuery, TError = unknown>(
  variables: CategoryQueryVariables,
  options?: UseQueryOptions<CategoryQuery, TError, TData>
) =>
  useQuery<CategoryQuery, TError, TData>(
    ['Category', variables],
    useFetchData<CategoryQuery, CategoryQueryVariables>(CategoryDocument).bind(
      null,
      variables
    ),
    options
  );
export const useInfiniteCategoryQuery = <
  TData = CategoryQuery,
  TError = unknown
>(
  pageParamKey: keyof CategoryQueryVariables,
  variables: CategoryQueryVariables,
  options?: UseInfiniteQueryOptions<CategoryQuery, TError, TData>
) => {
  const query = useFetchData<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument
  );
  return useInfiniteQuery<CategoryQuery, TError, TData>(
    ['Category.infinite', variables],
    (metaData) =>
      query({
        ...variables,
        ...(metaData.pageParam ? { [pageParamKey]: metaData.pageParam } : {}),
      }),
    options
  );
};

export const ProductsWithIdsDocument = /*#__PURE__*/ `
    query ProductsWithIds($ids: [Int!]!) {
  productsWithIds(ids: $ids) {
    id
    name
    description
    image
    price
  }
}
    `;
export const useProductsWithIdsQuery = <
  TData = ProductsWithIdsQuery,
  TError = unknown
>(
  variables: ProductsWithIdsQueryVariables,
  options?: UseQueryOptions<ProductsWithIdsQuery, TError, TData>
) =>
  useQuery<ProductsWithIdsQuery, TError, TData>(
    ['ProductsWithIds', variables],
    useFetchData<ProductsWithIdsQuery, ProductsWithIdsQueryVariables>(
      ProductsWithIdsDocument
    ).bind(null, variables),
    options
  );
export const useInfiniteProductsWithIdsQuery = <
  TData = ProductsWithIdsQuery,
  TError = unknown
>(
  pageParamKey: keyof ProductsWithIdsQueryVariables,
  variables: ProductsWithIdsQueryVariables,
  options?: UseInfiniteQueryOptions<ProductsWithIdsQuery, TError, TData>
) => {
  const query = useFetchData<
    ProductsWithIdsQuery,
    ProductsWithIdsQueryVariables
  >(ProductsWithIdsDocument);
  return useInfiniteQuery<ProductsWithIdsQuery, TError, TData>(
    ['ProductsWithIds.infinite', variables],
    (metaData) =>
      query({
        ...variables,
        ...(metaData.pageParam ? { [pageParamKey]: metaData.pageParam } : {}),
      }),
    options
  );
};

export const LoginDocument = /*#__PURE__*/ `
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    token
    email
    firstName
    lastName
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ['Login'],
    useFetchData<LoginMutation, LoginMutationVariables>(LoginDocument),
    options
  );
