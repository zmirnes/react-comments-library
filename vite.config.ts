import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/lib/**/*.ts", "src/lib/**/*.tsx"],
      exclude: ["src/dev/**/*", "**/*.test.ts", "**/*.test.tsx"],
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "ReactComments",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },

    sourcemap: true,
    emptyOutDir: true,
  },
});
