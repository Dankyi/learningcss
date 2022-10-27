/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976",
			xl: "1440px"
		},
		extend: {
			colors: {
				lightRed: "hsl(12, 88%, 60%)",
				lighterRed: "hsl(12, 90%, 70%)",
				whitishRed: "hsl(12, 88%, 95%)",
				snowRed: "hsl(13, 100%, 96%)",
				darkBlue: "hsl(228, 40%, 24%)",
				darkGray: "hsl(232, 12%, 14%)",
				lightGray: "hsl(227, 12%, 60%)",
				lighterGray: "hsl(0, 0%, 98%)",
			}
		},
	},
	plugins: [],
}
