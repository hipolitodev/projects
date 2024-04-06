import type { Config } from "tailwindcss";
import sharedConfig from "@hipolitodev/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "",
  presets: [sharedConfig],
};

export default config;
