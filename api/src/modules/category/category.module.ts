import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { Category } from './entities/category.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
