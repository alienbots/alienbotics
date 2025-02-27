/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
      extend: {
          colors: {
              'alienbotics-light-bg': '#F9F9F9',       // Very light gray background (approx.)
              'alienbotics-dark-text': '#1E1E1E',      // Near black text color (approx.)
              'alienbotics-brand-accent': '#6969FF',   // Brand accent color (purple-blue)
              'alienbotics-light-gray': '#E5E5E5',     // Light gray for subtle accents
              'alienbotics-button-primary': '#6969FF', // Primary button background
              'alienbotics-button-primary-hover': '#5A5AFF', // Primary button hover
              'alienbotics-button-secondary': '#FFFFFF', // Secondary button background (white)
              'alienbotics-button-secondary-hover': '#F0F0F0', // Secondary button hover
              'alienbotics-button-border': '#6969FF', // New border color for buttons
              'yale': '#00346a', // New Yale color
          },
          fontFamily: {
              'sans': [
                  'Inter', // Keeping Inter font, if available
                  'ui-sans-serif',
                  'system-ui',
                  '-apple-system',
                  'BlinkMacSystemFont',
                  'Segoe UI',
                  'Roboto',
                  'Helvetica Neue',
                  'Arial',
                  'Noto Sans',
                  'sans-serif',
                  'Apple Color Emoji',
                  'Segoe UI Emoji',
                  'Segoe UI Symbol',
                  'Noto Color Emoji'
              ],
          },
          fontSize: { // Optional: Adjust base font sizes.
              'base': '1rem',       // default is usually 1rem (16px)
              'lg': '1.125rem',      // 18px
              'xl': '1.25rem',      // 20px
              '2xl': '1.5rem',     // 24px
              '3xl': '1.875rem',    // 30px
              '4xl': '2.25rem',    // 36px
              '5xl': '3rem',       // 48px
              '6xl': '3.75rem',    // 60px
          },
      },
  },
  plugins: [],
};