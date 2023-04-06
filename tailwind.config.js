/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        probg: "url('./src/images/other/bg.jpg')",
      },
      backgroundSize: {
        half: "100% 40%",
      },
    },
    colors: {
      guap: "#173f35",
      whitey: "#f2f2f1",
      gwite: "#ebeaef",
      darky: "#1c1c1c",
      soft: "#f4f3f0",
    },
  },
  plugins: [require("flowbite/plugin")],
};
