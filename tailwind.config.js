/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // إضافة مسار Flowbite
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-custom': '0 10px 25px hsl(210deg 8% 62% / 71%);',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbitePlugin, // استدعاء Flowbite
  ],
};
