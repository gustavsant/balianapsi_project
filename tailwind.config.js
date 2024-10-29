/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        deepForestGreen: "#334F40",
        whiteSmoke: "#F5F5F5",
        goldenSand: "#AF9A65",
      },
      fontFamily: {
        title: ["Poltawski Nowy"],
        body: ["Poppins"],
      },
      backgroundImage: {
        'hero': "url(images/psychologist.jpeg')",
        'flowers': "url(images/flowers.jpeg')",
        'casual': "url(images/casual.jpeg')",
        'professional': "url(images/professional.jpeg')",
        'catbed': "url('images/catbed.jpeg')"
      }
    },
  },
  plugins: [],
};