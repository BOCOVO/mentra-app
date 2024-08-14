import { GraphQLError } from 'graphql';

export class InvalidAIResponse extends GraphQLError {
  constructor() {
    super('Invalid ai response', {
      extensions: { code: 'INVALID_AI_RESPONSE' },
    });
  }
}
