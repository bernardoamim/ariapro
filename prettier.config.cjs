/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: './src/**/*.{js,ts,jsx,tsx}',
      options: {
        arrowParens: 'avoid',
        singleQuote: true,
      },
    },
  ],
}

module.exports = config
