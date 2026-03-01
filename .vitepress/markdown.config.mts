// refer https://vitepress.dev/reference/default-theme-config
import type { MarkdownOptions } from 'vitepress';

export default {
    lineNumbers: true,

    image: {
        lazyLoading: true,
    },

    toc: {
        level: [1, 2, 3],
    },
} as MarkdownOptions;
