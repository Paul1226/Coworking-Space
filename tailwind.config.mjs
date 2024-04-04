/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: '#9B9A78',
				secondary: '#313131',
				tertiary: '#909090',
				quaternary: '#7290A0',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				playfair: ['Playfair Display Variable', 'serif'],
			},
			gridTemplateColumns:{
				'2mobile': 'max-content max-content',
				'3p': 'repeat(auto-fit, minmax(250px,1fr))',
			}
		},
	},
	plugins: [],
}
