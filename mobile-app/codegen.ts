import type { CodegenConfig } from "@graphql-codegen/cli";
import { API_URL } from "./constants/envs";

const config: CodegenConfig = {
  schema: API_URL,
  documents: [
    "components/**/*.(tsx|ts)",
    "app/**/*.(tsx|ts)",
    "hooks/*.ts",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
    },
    "./gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
