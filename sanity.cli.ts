import { defineCliConfig } from "sanity/cli";

import { sanityEnv } from "./sanity/env";

export default defineCliConfig({
  api: {
    projectId: sanityEnv.projectId || "demo-project",
    dataset: sanityEnv.dataset || "production",
  },
  typegen: {
    path: "./{app,components,lib,sanity}/**/*.{ts,tsx}",
    schema: "schema.json",
    generates: "./sanity.types.ts",
    overloadClientMethods: true,
  },
});
