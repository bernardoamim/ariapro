/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  arrowParens: 'avoid',
  singleQuote: true,
}

module.exports = config
