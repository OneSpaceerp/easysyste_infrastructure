/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7C1029',
                    50: '#F5E6E9',
                    100: '#EBCED4',
                    200: '#D69CA9',
                    300: '#C26A7F',
                    400: '#9F3D54',
                    500: '#7C1029',
                    600: '#680C22',
                    700: '#52091A',
                    800: '#3D0613',
                    900: '#28040C',
                },
                accent: {
                    DEFAULT: '#293239',
                    light: '#3E484F',
                    dark: '#1A2126',
                },
                background: '#F4F4F4',
                foreground: '#0E0D0D',
                muted: {
                    DEFAULT: '#4B5563',
                    light: '#6B7280',
                },
            },
            fontFamily: {
                heading: ['var(--font-montserrat)', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
                body: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
            },
            transitionTimingFunction: {
                'apple-spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'slide-up': 'slideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'slide-in-left': 'slideInLeft 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-12px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(12px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': 'linear-gradient(135deg, #7C1029 0%, #293239 100%)',
            },
        },
    },
    plugins: [],
}
