import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sfPro)', ...fontFamily.sans],
        display: ['var(--font-sfPro)'],
      },
    },
  },
  plugins: [],
} satisfies Config
