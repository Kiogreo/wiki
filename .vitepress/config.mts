import themeConfig from "./theme.config.mts";
import markdownConfig from "./markdown.config.mts";
import viteConfig from "./vite.config.mts";
import vueConfig from "./vue.config.mts";
import { defineConfig } from "vitepress";

export default defineConfig({
  // site metadata config
  title: "Kiogreo Wiki",
  description: "Wiki for Kiogreo Ecosystem",
  ignoreDeadLinks: true,
  lang: "en-US",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],

  // build config
  srcDir: "./src", // source directory
  cleanUrls: true, // exclude file extention from route

  // server config
  vue: vueConfig,
  vite: viteConfig,
  markdown: markdownConfig,
  themeConfig: themeConfig,
});
