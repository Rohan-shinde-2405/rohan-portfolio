/***** @type {import('tailwindcss').Config} *****/
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brittany-style deep navy palette + teal accent
        night: {
          950: '#060d1c',
          900: '#0a1224',
          800: '#0e1a2f'
        },
        muted: '#A8B2D1',
        ring: '#233554',
        accent: '#64ffda'
      },
      boxShadow: {
        subtle: '0 8px 30px rgba(0,0,0,.25)'
      },
      borderRadius: { '2xl': '1rem' },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial']
      }
    }
  },
  plugins: []
}
