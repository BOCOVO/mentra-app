import { UserInputError } from '@nestjs/apollo';

export class WrongAuthToken extends UserInputError {
  constructor() {
    super('Wrong Auth Token', {
      extensions: {
        code: 'WRONG_AUTH_TOKEN',
      },
    });
  }
}
