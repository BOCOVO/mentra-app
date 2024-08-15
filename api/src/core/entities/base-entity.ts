import { PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppBaseEntity<T extends AppBaseEntity<T> = any> {
  @Field()
  @PrimaryKey({ type: 'bigint', autoincrement: true })
  id!: string;

  @Field(() => Date, { nullable: true })
  @Property({
    type: Date,
    nullable: true,
    onCreate: () => new Date(),
  })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @Property({
    type: Date,
    nullable: true,
    onCreate: () => null,
    onUpdate: () => new Date(),
  })
  updatedAt?: Date;
}
