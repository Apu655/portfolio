module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'snap': "url('https://www.google.com/logos/fnbx/thanos/thanos_snap.png')",
        'time': "url('https://www.google.com/logos/fnbx/thanos/thanos_time.png')",
        'space': "url('/thanos_stone.png')",
      },
    },
  },
  plugins: [],
}
