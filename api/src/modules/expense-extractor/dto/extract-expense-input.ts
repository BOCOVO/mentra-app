import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ExtractExpenseInput {
  @Field()
  mimeType: string;

  @Field()
  uri: string;
}
