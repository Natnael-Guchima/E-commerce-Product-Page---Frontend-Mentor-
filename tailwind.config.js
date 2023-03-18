/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Kummbh-Sans": ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          "pale-orange": "hsl(25, 100%, 94%)",
          "hover-orange": "#ffac6a",
        },
        secondary: {
          "dark-blue": "hsl(220, 13%, 13%)",
          "dark-mid-grayish-blue": "hsl(219, 9%, 45%)",
          "dark-grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
