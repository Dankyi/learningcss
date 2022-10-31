/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"darkGray": "#606060",
			"darkerGray": "#4c4c4c",
			"lightGray": "#f0f0f0",
			"lighterGray": "#f8f8f8"
		},
		fontFamily: {
			roboto: ['"Roboto"', 'Arial'],
		},
		extend: {},
	},
	plugins: [],
}
