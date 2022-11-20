import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import moment from "moment";
export default defineConfig(({ command, mode }) => {
  const time = moment();
  const sign = `e/${time.format("YYYY-MM-DD")}`;
  return {
    plugins: [vue(), vueJsx()],
    root: path.resolve(__dirname, "./src/"),
    build: {
      //output 为静态资源以及index.html打包的文件夹
      outDir: path.resolve(__dirname, ""),
      rollupOptions: {
        input: {
          1: path.resolve(__dirname, "./src/index.html"),
        },
        output: {
          entryFileNames: `${sign}/[name].js`,
          chunkFileNames: `${sign}/[name].js`,
          assetFileNames: `${sign}/[name].[ext]`,
        },
      },
      minify: "esbuild",
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
