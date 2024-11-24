import { createFvttViteConfig } from "./packages/shared-fvtt-bits/dotfiles/import/createFvttViteConfig";
import { id as foundryPackageId } from "./public/system.json";

const config = createFvttViteConfig({
  foundryPackageId,
  packageType: "module",
  importMetaUrl: import.meta.url,
});

export default config;