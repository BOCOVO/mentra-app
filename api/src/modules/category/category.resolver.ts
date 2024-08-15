import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GqlUseAuth, GqlUser } from '../auth/guards/graphql-guards';

import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dtos';

import { JwtTokenPayload } from '@/types/user';
import { OperationResult } from '@/types/gql/objects';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [Category])
  @GqlUseAuth()
  async myCategories(@GqlUser() user: JwtTokenPayload): Promise<Category[]> {
    return this.categoryService.getMyCategories(user.id);
  }

  @Mutation(() => Category)
  @GqlUseAuth()
  async createCategory(
    @GqlUser() user: JwtTokenPayload,
    @Args() args: CreateCategoryDto,
  ) {
    return this.categoryService.createCategory(user.id, args);
  }
  @Mutation(() => OperationResult)
  @GqlUseAuth()
  async deleteCategory(
    @GqlUser() user: JwtTokenPayload,
    @Args('categoryID') categoryID: string,
  ) {
    return this.categoryService.deleteCategory(user.id, categoryID);
  }
}
