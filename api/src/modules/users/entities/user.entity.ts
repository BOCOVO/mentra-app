import { Entity, Enum, Property } from '@mikro-orm/postgresql';

import { AuthProvider } from '../enums/enums';

import { AppBaseEntity } from '@/core/entities/base-entity';

@Entity()
export class User extends AppBaseEntity {
  @Property({ unique: true, type: 'varchar' })
  email: string;

  @Enum(() => AuthProvider)
  provider: AuthProvider;

  @Property({ unique: true, type: 'varchar' })
  socialID: string;

  @Property({ type: 'varchar', nullable: true })
  firstName: string | null;

  @Property({ type: 'varchar', nullable: true })
  lastName: string | null;
}
