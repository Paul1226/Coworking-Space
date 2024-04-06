import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				gurkha: {
					'50': '#f5f5f0',
					'100': '#e8e7df',
					'200': '#d4d3c2',
					'300': '#b9b89d',
					'400': '#9b9a78',
					'500': '#828160',
					'600': '#65664a',
					'700': '#50503b',
					'800': '#424232',
					'900': '#393a2d',
					'950': '#1d1d16',
				},
				
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
	plugins: [animations],
}
