import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#191a21",
        accent: "#232631",
        primary: {
          1: "#0a75ef",
          2: "#022c5e",
          3: "#02244d",
        },
        success: {
          1: "#10bb83",
          2: "#08503a",
          3: "#064731",
        },
        warning: {
          1: "#ffbc6f",
          2: "#f69d50",
          3: "#e0823d",
        },
        danger: {
          1: "#ff5252",
          2: "#5a0b0d",
          3: "#4a0201",
        },
        tertiary: {
          1: "#feffff",
          2: "#989daa",
          3: "#737992",
          4: "#4e5465",
          5: "#2f3543",
        },
        tech: colors.blue[500],
        travel: colors.green[500],
        misc: colors.gray[400],
      },
    },
    fontFamily: {
      body: '"Atkinson Hyperlegible", sans-serif',
      display: '"Rubik", sans-serif',
      mono: '"Fira Code", monospace',
    },
  },
  plugins: [],
};
