/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        md: '2rem',
        DEFAULT: '1rem'
      },
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))', // Dynamically uses the CSS variable for border color
        input: 'hsl(var(--input))', // For input field backgrounds
        ring: 'hsl(var(--ring))', // For focus rings
        background: 'hsl(var(--background))', // Background of the app
        foreground: 'hsl(var(--foreground))', // Default text color
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Main primary color
          foreground: 'hsl(var(--primary-foreground))' // Text color on primary elements
        },
        'primary-light': 'hsl(var(--primary-light))',
        'primary-dark': 'hsl(var(--primary-dark))',
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Accent color
          foreground: 'hsl(var(--accent-foreground))' // Text color on accent elements
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Secondary background
          foreground: 'hsl(var(--secondary-foreground))' // Secondary text color
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Destructive action color (e.g., delete buttons)
          foreground: 'hsl(var(--destructive-foreground))' // Text color for destructive elements
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // Muted elements background
          foreground: 'hsl(var(--muted-foreground))' // Text color for muted elements
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Popover background color
          foreground: 'hsl(var(--popover-foreground))' // Text color for popovers
        },
        card: {
          DEFAULT: 'hsl(var(--card) / 0.3)', // Card background color
          foreground: 'hsl(var(--card-foreground))' // Card text color
        }
      },
      borderRadius: {
        lg: 'var(--radius)', // Large border radius, dynamically using the radius variable
        md: 'calc(var(--radius) - 2px)', // Medium border radius
        sm: 'calc(var(--radius) - 4px)' // Small border radius
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: []
}
