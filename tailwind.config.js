/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // index.html ফাইল স্ক্যান করবে
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hind: ["Hind Madurai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
