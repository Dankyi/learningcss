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
			"lightGray": "#9b9a9a",
			"semiLightGray": "#f2efef",
			"lighterGray": "#f0f0f0",
			"lightestGray": "#f8f8f8",
			"red": "#da1313",
			"white": "#fff"
		},
		fontFamily: {
			roboto: ['"Roboto"', 'Arial'],
		},
		extend: {},
	},
	plugins: [],
}
