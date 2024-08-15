import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/postgresql';

import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dtos';

import { OperationResult } from '@/types/gql/objects';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: EntityRepository<Category>,
  ) {}

  async getMyCategories(userID: string): Promise<Category[]> {
    return this.categoryRepo.findAll({
      where: {
        $or: [
          { owner: userID },
          {
            isCommonCategory: true,
          },
        ],
      },
    });
  }

  async createCategory(
    userID: string,
    payload: CreateCategoryDto,
  ): Promise<Category> {
    const createdCategory = this.categoryRepo.create({
      title: payload.title,
      owner: userID,
      isCommonCategory: false,
    });
    await this.categoryRepo.insert(createdCategory);

    return createdCategory;
  }

  async deleteCategory(
    userID: string,
    categoryID: string,
  ): Promise<OperationResult> {
    const deleted = await this.categoryRepo.nativeDelete({
      id: categoryID,
      isCommonCategory: false,
      owner: userID,
    });

    return {
      success: deleted > 0,
    };
  }
}
