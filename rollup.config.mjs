import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
  {
    input: {
      hooks: "src/hooks/index.ts",
      interfaces: "src/interfaces/index.ts",
      validations: "src/validations/index.ts",
      providers: "src/providers/index.ts",
    },
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      entryFileNames: "[name]/index.js",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ["react", "react-native", "axios", "react-query", "yup"],
  },

  {
    input: "./dist/hooks/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
