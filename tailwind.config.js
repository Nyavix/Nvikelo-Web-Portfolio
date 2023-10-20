/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      'dark-violet': '#1F1723',
      'pastel-pink': '#E8CBE4',
      'off-white': '#F2EBE0',
    },
    extend: {
      backgroundImage: {
		'dev-pattern': "url('../public/Dev-BG.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'poppins': 'poppins',
      },
      animation: {
				"fade-in": "fade-in 1.5s ease-in-out forwards",
				title: "title 1s ease-out forwards",
				"fade-left": "fade-left 1s ease-in-out forwards",
				"fade-right": "fade-right 1s ease-in-out forwards",
        "wiggle" : "wiggle 0.25s ease-in-out infinite"
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"30%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
			},
    },
  },
  plugins: [],
  plugins: [nextui],
}
