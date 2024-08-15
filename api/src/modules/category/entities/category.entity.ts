import { Check, Entity, ManyToOne, Property } from '@mikro-orm/postgresql';
import { Field, ObjectType } from '@nestjs/graphql';

import { AppBaseEntity } from '@/core/entities/base-entity';
import { User } from '@/modules/users/entities/user.entity';

@ObjectType()
@Entity()
@Check({
  expression: 'is_common_category = FALSE OR owner_id IS NULL',
  name: 'is_common_or_owned',
})
export class Category extends AppBaseEntity {
  @Field()
  @Property({ type: 'varchar' })
  title!: string;

  @Field()
  @Property({ hidden: true, default: false, type: 'boolean' })
  isCommonCategory: boolean = false;

  @Field({ nullable: true })
  @Property({ type: 'varchar', nullable: true })
  iconName?: string;

  @ManyToOne(() => User, { nullable: true })
  owner?: User;
}
