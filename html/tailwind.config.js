module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./*.{html,js}", // Add the root directory path
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
		screens: {
			xs: "400px",
			sm: "576px",
			md: "768px",
			"2md": "991px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"md-lg": { min: "768px", max: "1024px" },
			"lg-xl": { min: "1024px", max: "1200px" },
		},
	},
	plugins: [],
};
