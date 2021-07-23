// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, BankAccount } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  BankAccount
};