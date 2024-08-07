import { PrimaryKey, Property } from '@mikro-orm/core';

export class AppBaseEntity<T extends AppBaseEntity<T> = any> {
  @PrimaryKey({ type: 'bigint', autoincrement: true })
  id!: string;

  @Property({
    type: Date,
    nullable: true,
    onCreate: () => new Date(),
  })
  createdAt?: Date;

  @Property({
    type: Date,
    nullable: true,
    onCreate: () => null,
    onUpdate: () => new Date(),
  })
  updatedAt?: Date;
}
