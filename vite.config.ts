import * as path from "path";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const lib = command == "build" && mode == "lib";

  return {
    root: path.resolve("src"),

    publicDir: path.resolve("public"),

    build: lib
      ? {
          outDir: path.resolve("dist"),
          emptyOutDir: true,

          lib: {
            entry: path.resolve("src/lib/main.ts"),
            formats: ["es", "cjs"],
          },

          rollupOptions: {
            external: ["vue"],
          },
        }
      : {
          outDir: path.resolve("site"),
          emptyOutDir: true,
        },

    plugins: [vueJsx(), vanillaExtractPlugin()],
  };
});
