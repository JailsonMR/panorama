module.exports = {
  content: ['./src/**/*.{js,jsx}', './pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        accent: '#95D5B2',
        soft: '#F7FAFC',
        ink: '#1F2937',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}