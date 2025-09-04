/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsla(230, 20%, 12%, 1)',
        text: 'hsla(0, 0%, 95%, 1)',
        accent: 'hsla(40, 100%, 50%, 1)',
        primary: 'hsla(240, 80%, 60%, 1)',
        surface: 'hsla(230, 20%, 15%, 1)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 8px 24px hsla(0, 0%, 0%, 0.2)',
        'focus': '0 0 0 3px hsla(40, 100%, 50%, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px hsla(240, 80%, 60%, 0.3)' },
          '100%': { boxShadow: '0 0 30px hsla(240, 80%, 60%, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
