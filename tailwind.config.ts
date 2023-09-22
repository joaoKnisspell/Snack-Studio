import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        home: '1342px',
      },
      gridTemplateColumns: {
        appLarge: 'minmax(18rem, 20rem) 1fr',
        app: 'minmax(18rem, 20rem) 1fr',
      },
      gridTemplateRows: {
        movie: '1fr auto',
      },
      colors: {
        sides: '#21242D',
        bgColor: '#16181E',
        borderColor: '#F9F9F91A',
        text: '#F9F9F9',
        star: '#FEEA35',
        grayText: '#8B8D9B',
        grayBtn: '#2B2B37',
      },
    },
  },
  plugins: [],
}
export default config
