import { DefaultTheme } from "vitepress";
import { socialLinks } from "../src/social-links.mts";

// refer https://vitepress.dev/reference/default-theme-config
export default {
    logo: "./logo.png",
    siteTitle: "Kiogreo Wiki",
    socialLinks,
    search: {
        provider: "local", // refer https://vitepress.dev/reference/default-theme-search
    },
    lastUpdated: {
        text: "Updated At",
    },
    outline: {
        level: [1, 3], // refer https://vitepress.dev/reference/default-theme-config#outline
    },
} satisfies DefaultTheme.Config;
