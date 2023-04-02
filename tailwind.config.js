/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      guap: "#173f35",
      whitey: "#f2f2f1",
      gwite: "#ebeaef",
      darky: "#1c1c1c",
    },
  },
  plugins: [require("flowbite/plugin")],
};
