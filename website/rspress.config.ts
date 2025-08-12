import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  base: "/dms-web/",
  title: "Base DMS",
  icon: "/logo.svg",
  logo: {
    light: "/logo.svg",
    dark: "/logo.svg",
  },
  logoText: "Base DMS",
  lang: "zh",
  locales: [
    {
      lang: "en",
      label: "English",
      title: "Base DMS",
      description: "Base Data Managerment System",
    },
    {
      lang: "zh",
      label: "简体中文",
      title: "Base DMS",
      description: "Base数据管理系统",
    },
  ],
  themeConfig: {
    darkMode: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/basedt/dms-web",
      },
    ],
    locales: [
      {
        lang: "en",
        label: "English",
        outlineTitle: "ON THIS PAGE",
        prevPageText: "Previous Page",
        nextPageText: "Next Page",
      },
      {
        lang: "zh",
        label: "简体中文",
        outlineTitle: "目录",
        prevPageText: "上一页",
        nextPageText: "下一页",
      },
    ],
  },
  multiVersion: {
    default: "dev",
    versions: [ "dev","v1.1.0"],
  },
  search: {
    versioned: true,
  },
});
