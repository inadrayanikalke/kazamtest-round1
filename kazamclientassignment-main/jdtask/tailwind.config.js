/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        xs: "16rem",
      },
      scrollbar: ["rounded", "gradient", "hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
