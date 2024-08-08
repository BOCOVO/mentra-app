import { Entity, Property } from '@mikro-orm/postgresql';

import { AppBaseEntity } from '@/core/entities/base-entity';

@Entity()
export class Category extends AppBaseEntity {
  @Property({ type: 'varchar' })
  title!: string;

  @Property({ hidden: true, default: false, type: 'boolean' })
  isCommonCategory: boolean = false;

  @Property({ type: 'varchar', nullable: true })
  iconName?: string;
}
