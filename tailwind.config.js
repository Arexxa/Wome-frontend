/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        sm: { min: "640px" }, // large mobiles
        md: { min: "768px" }, // iPads, Tablets
        lg: { min: "1024px" }, // Small screens, laptops
        xl: { min: "1280px" }, // Desktops, large screens
        xxl: { min: "2560px" },
      },
    },
  },
  plugins: [],
}