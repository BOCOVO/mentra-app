/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isCommonCategory: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateTransactionDto = {
  amount: Scalars['Float']['input'];
  categoryID: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: TransactionType;
};

export type ExpenseResponse = {
  __typename?: 'ExpenseResponse';
  amount: Scalars['Float']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  expenseTitle: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBulkTransaction: Array<Transaction>;
  createCategory: Category;
  createTransaction: Transaction;
  deleteCategory: OperationResult;
  deleteTransaction: OperationResult;
  extractExpenses: Array<ExpenseResponse>;
  login: LoginResponse;
  updateTransaction: Transaction;
};


export type MutationCreateBulkTransactionArgs = {
  input: Array<CreateTransactionDto>;
};


export type MutationCreateCategoryArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionDto;
};


export type MutationDeleteCategoryArgs = {
  categoryID: Scalars['String']['input'];
};


export type MutationDeleteTransactionArgs = {
  transactionID: Scalars['String']['input'];
};


export type MutationExtractExpensesArgs = {
  mimeType: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionDto;
  transactionID: Scalars['String']['input'];
};

export type OperationResult = {
  __typename?: 'OperationResult';
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  myCategories: Array<Category>;
  queryPlaceholder: Scalars['Boolean']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: TransactionType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum TransactionType {
  Expense = 'Expense',
  Income = 'Income'
}

export type UpdateTransactionDto = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryID?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TransactionType>;
};

export type LoginMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;