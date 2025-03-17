
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk neon theme colors
				neon: {
					pink: '#ff2a6d',
					blue: '#05d9e8',
					purple: '#9b87f5',
					yellow: '#f9f871',
					green: '#00ff9f',
				},
				cyber: {
					dark: '#0f0f0f',
					darker: '#050505',
					darkest: '#000000',
					light: '#1a1a1a',
					lighter: '#2a2a2a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				neon: '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
				'neon-pink': '0 0 5px theme("colors.neon.pink"), 0 0 20px theme("colors.neon.pink")',
				'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
				'neon-green': '0 0 5px theme("colors.neon.green"), 0 0 20px theme("colors.neon.green")',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'pulse-neon': {
					'0%': { boxShadow: '0 0 5px theme("colors.neon.blue"), 0 0 10px theme("colors.neon.blue")' },
					'50%': { boxShadow: '0 0 10px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")' },
					'100%': { boxShadow: '0 0 5px theme("colors.neon.blue"), 0 0 10px theme("colors.neon.blue")' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'text-flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 2s infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'text-flicker': 'text-flicker 4s linear infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
