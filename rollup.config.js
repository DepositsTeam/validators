import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.js",
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
  output: {
    file: "dist/index.js",
    format: "es",
  },
});
