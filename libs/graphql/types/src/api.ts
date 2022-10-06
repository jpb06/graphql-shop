import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

import { fetcher } from './fetcher';
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

export type Mutation = {
  __typename?: 'Mutation';
  login: GqlAuthOutput;
  signup: GqlAuthOutput;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<GqlCategory>;
  category: GqlCategory;
  me: GqlLoggedUser;
  product: GqlProduct;
  products: Array<GqlProduct>;
  productsWithIds: Array<GqlProduct>;
};

export type QueryCategoryArgs = {
  id: Scalars['Int'];
};

export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type QueryProductsWithIdsArgs = {
  ids: Array<Scalars['Int']>;
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

export type ProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type ProductQuery = {
  __typename?: 'Query';
  product: {
    __typename?: 'GqlProduct';
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: { __typename?: 'GqlCategory'; id: string; name: string };
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
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables
      )(),
    options
  );
useLoginMutation.getKey = () => ['Login'];

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
    (variables?: SignupMutationVariables) =>
      fetcher<SignupMutation, SignupMutationVariables>(
        SignupDocument,
        variables
      )(),
    options
  );
useSignupMutation.getKey = () => ['Signup'];

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
    fetcher<CategoriesQuery, CategoriesQueryVariables>(
      CategoriesDocument,
      variables
    ),
    options
  );

useCategoriesQuery.getKey = (variables?: CategoriesQueryVariables) =>
  variables === undefined ? ['Categories'] : ['Categories', variables];
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
    fetcher<CategoryQuery, CategoryQueryVariables>(CategoryDocument, variables),
    options
  );

useCategoryQuery.getKey = (variables: CategoryQueryVariables) => [
  'Category',
  variables,
];
export const ProductDocument = /*#__PURE__*/ `
    query Product($id: Int!) {
  product(id: $id) {
    id
    name
    description
    image
    price
    category {
      id
      name
    }
  }
}
    `;
export const useProductQuery = <TData = ProductQuery, TError = unknown>(
  variables: ProductQueryVariables,
  options?: UseQueryOptions<ProductQuery, TError, TData>
) =>
  useQuery<ProductQuery, TError, TData>(
    ['Product', variables],
    fetcher<ProductQuery, ProductQueryVariables>(ProductDocument, variables),
    options
  );

useProductQuery.getKey = (variables: ProductQueryVariables) => [
  'Product',
  variables,
];
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
    fetcher<ProductsWithIdsQuery, ProductsWithIdsQueryVariables>(
      ProductsWithIdsDocument,
      variables
    ),
    options
  );

useProductsWithIdsQuery.getKey = (variables: ProductsWithIdsQueryVariables) => [
  'ProductsWithIds',
  variables,
];
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
    fetcher<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables),
    options
  );

useProductsQuery.getKey = (variables?: ProductsQueryVariables) =>
  variables === undefined ? ['Products'] : ['Products', variables];
