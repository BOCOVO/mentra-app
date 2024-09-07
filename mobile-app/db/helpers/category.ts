import database from "db";
import { Category } from "db/models/category";

type CreateCategoryInput = Pick<Category, "title" | "iconName">;

export const createCategory = async (data: CreateCategoryInput) => {
  await database.write(async () => {
    const newPost = await database
      .get<Category>(Category.table)
      .create((record) => {
        record.title = data.title;
        record.iconName = data.iconName;
      });

    return newPost;
  });
};
