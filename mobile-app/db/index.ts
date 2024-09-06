import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./models/schema";
import migrations from "./models/migrations";
import { Transaction } from "./models/transaction";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  onSetUpError: (error) => {},
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [Transaction],
});

export default database;
