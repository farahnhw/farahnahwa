module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    container: {
      center: true,
      padding: '36px',
    },
    extend: {
      colors: {
        purple: '#4D4C7D',
        dark: '#363062',
        background: '#FFF2F2',
        green: '#417D7A',
        orange: '#E45826',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
