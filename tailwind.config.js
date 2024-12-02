/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#4CAF4F',
        lightcolor: '#4D4D4D',
        basecolor: '#1E1E1E',
        black: '#323232',
        darkblack: '#121312'
      },
    },
  },
  plugins: [],
};
