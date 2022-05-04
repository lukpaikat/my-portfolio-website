module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'county-green': '#093523',
        'bright-red': '#EA0801',
        soapstone: '#FDFDFD',
      },
      minWidth: {
        '44px': '44px',
      },
      minHeight: {
        '44px': '44px',
        '410px': '410px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
