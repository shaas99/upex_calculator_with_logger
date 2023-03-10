/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
// Refer For Lib mode : https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: false,
    outDir: "lib/dist",
    sourcemap: true,
    lib: {
      formats: ["es"],
      entry: "./lib/src/index.ts",
      name: 'Upex-TS-Lib-Template',
      fileName: 'upex-ts-lib-template',
    }
  },
});
