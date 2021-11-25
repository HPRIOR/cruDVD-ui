import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Actor = {
  __typename?: 'Actor';
  first_name?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  comment_id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  film_id?: Maybe<Scalars['Float']>;
  replies?: Maybe<Array<Comment>>;
  short_content?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  user_id: Scalars['ID'];
};

export type Film = {
  __typename?: 'Film';
  actors?: Maybe<Array<Actor>>;
  category?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  description: Scalars['String'];
  film_id: Scalars['ID'];
  fulltext: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  language_id: Scalars['Int'];
  last_update: Scalars['String'];
  length: Scalars['Int'];
  rating: Scalars['String'];
  release_year: Scalars['String'];
  rental_duration: Scalars['Int'];
  rental_rate: Scalars['Float'];
  replacement_cost: Scalars['Float'];
  special_features: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String'];
  filmId?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};


export type MutationLoginArgs = {
  input: RegisterInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  cursor: Scalars['Float'];
  films: Array<Film>;
};

export type PaginationInput = {
  after?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  checkLogin?: Maybe<User>;
  getCommentsByFilmId?: Maybe<Array<Comment>>;
  getFilmByTitle?: Maybe<Film>;
  getFilms: PaginatedFilms;
  getFilmsByCategory?: Maybe<PaginatedFilms>;
  getRepliesOfComment?: Maybe<Array<Comment>>;
  hello: Scalars['String'];
};


export type QueryGetCommentsByFilmIdArgs = {
  filmId: Scalars['Float'];
};


export type QueryGetFilmByTitleArgs = {
  title: Scalars['String'];
};


export type QueryGetFilmsArgs = {
  pagination: PaginationInput;
};


export type QueryGetFilmsByCategoryArgs = {
  categoryName: Scalars['String'];
  pagination: PaginationInput;
};


export type QueryGetRepliesOfCommentArgs = {
  commentId: Scalars['Float'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<UserResponseError>;
  user?: Maybe<User>;
};

export type UserResponseError = {
  __typename?: 'UserResponseError';
  emailError?: Maybe<Array<Scalars['String']>>;
  genericError?: Maybe<Array<Scalars['String']>>;
  passError?: Maybe<Array<Scalars['String']>>;
  userError?: Maybe<Array<Scalars['String']>>;
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', username: string, email: string, id: string } | null | undefined, errors?: { __typename?: 'UserResponseError', userError?: Array<string> | null | undefined, passError?: Array<string> | null | undefined, emailError?: Array<string> | null | undefined, genericError?: Array<string> | null | undefined } | null | undefined } };


export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      username
      email
      id
    }
    errors {
      userError
      passError
      emailError
      genericError
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;