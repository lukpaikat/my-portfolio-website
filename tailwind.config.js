module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'county-green': '#093523',
        'county-green-darker': '#061e15',
        'bright-red': '#EA0801',
        soapstone: '#FDFDFD',
        salmon: '#F3837F',
        'spanish-green': '#839990',
        bush: '#0D291F',
      },
      minWidth: {
        '44px': '44px',
      },
      minHeight: {
        '44px': '44px',
        '410px': '410px',
      },
      transitionTimingFunction: {
        springy: 'cubic-bezier(.49,.31,.67,1.46)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
