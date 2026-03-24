/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      // adicione src se seu projeto tiver src/
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['var(--font-neue-montreal)', '"Neue Montreal"', 'sans-serif'],
          'helvetica': ['var(--font-helvetica)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
          'neue-montreal': ['var(--font-neue-montreal)', '"Neue Montreal"', 'sans-serif'],
        },
        fontWeight: {
          'thin': '100',        // HelveticaNeueThin
          'extralight': '200',  // HelveticaNeueUltraLight  
          'light': '300',       // HelveticaNeueLight / NeueMontreal-Light
          'normal': '400',      // HelveticaNeueRoman / NeueMontreal-Regular
          'medium': '500',
          'semibold': '600',
          'bold': '700',
          'extrabold': '800',
          'black': '900',
        },
        screens: {
          '1xl': '1080px',
          '2xl': '1480px',
          custom: '940px',
        },
        textWrap: {
          'balance': 'balance',
          'pretty': 'pretty',
          'stable': 'stable',
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  