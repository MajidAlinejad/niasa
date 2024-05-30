/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greenLight: '#AAE23A',
        green: '#87C210',
        greenDisable: '#F4FBE7',
        gray: '#F0F4F7',
        disableText: '#7F9CB8',
        text: '#072C50',
      },
    },
  },
  plugins: [],
};
