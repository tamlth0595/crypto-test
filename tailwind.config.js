module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppin': ['Poppins', 'sans-serif']
      },
      colors: {
        // Configure your color palette here
        'beo-yellow': '#F7A501',
        'beo-gray': '#ADB0B6',
        'beo-section-dark-gray': '#2C353D',
        'beo-divider': '#748FB5',
        'beo-section-gray': 'rgba(40, 48, 54, 0.3)',
        'beo-offer-black': '#1E252B'
      }
    },
  },
  plugins: [],
}