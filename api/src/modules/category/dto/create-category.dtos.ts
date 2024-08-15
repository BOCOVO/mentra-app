import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateCategoryDto {
  @Field()
  title: string;
}
