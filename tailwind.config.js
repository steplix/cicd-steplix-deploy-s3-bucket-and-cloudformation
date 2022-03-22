module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary => Blue
        // secundary => yellow
        // danger => red
        // lilac => lilac
        primary: '#2D82FA',
        secundary: '#FFD232',
        danger: '#FA503C',
        lilac:'#180228'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}