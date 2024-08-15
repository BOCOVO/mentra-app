import { Entity, Enum, ManyToOne, Property } from '@mikro-orm/postgresql';
import { Field, Float, ObjectType } from '@nestjs/graphql';

import { TransactionType } from '../enums/transaction-type.enum';

import { AppBaseEntity } from '@/core/entities/base-entity';
import { User } from '@/modules/users/entities/user.entity';
import { Category } from '@/modules/category/entities/category.entity';

@ObjectType()
@Entity()
export class Transaction extends AppBaseEntity {
  @Field()
  @Property({ type: 'varchar' })
  title: string;

  @Field()
  @Property({ type: 'varchar' })
  description: string;

  @Field(() => Float)
  @Property({ type: 'double precision' })
  amount: number;

  @Enum(() => TransactionType)
  @Field(() => TransactionType)
  type: TransactionType;

  @ManyToOne(() => Category)
  category?: Category;

  @ManyToOne(() => User, { nullable: true })
  owner?: User;

  @Field(() => Date)
  @Property({ type: 'timestamp with time zone' })
  date: Date;
}
