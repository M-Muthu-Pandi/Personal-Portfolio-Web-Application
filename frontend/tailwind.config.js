/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      customDark: "#0F0F0F",
    },
    boxShadow: {
      custom: "0 0 10px 5px #22C55E",
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
    },
  },
};
export const plugins = [];
