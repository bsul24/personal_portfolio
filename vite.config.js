import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cosmoMotors: resolve(__dirname, "cosmoMotors.html"),
        pawMailMerge: resolve(__dirname, "pawMailMerge.html"),
        fitnessRoutineGenerator: resolve(
          __dirname,
          "fitnessRoutineGenerator.html"
        ),
      },
    },
  },
});
