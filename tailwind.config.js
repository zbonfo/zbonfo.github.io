const {colors} = require("tailwindcss/colors")
const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        data: {
            checked: 'checked',
            selected: 'selected',
            disabled: 'disabled',
            highlighted: 'highlighted',
        },
        extend: {
            boxShadow: {
                'md': '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },
            colors: {
                ...colors,
                brand: {
                    50: '#f2f0ff',
                    100: '#eeebff',
                    200: '#d4d0ff',
                    300: '#c7c2ff',
                    400: '#9f92ff',
                    500: '#6152df',
                    600: '#5243cb',
                    700: '#3f2eb2',
                    800: '#312887',
                    900: "#231c6b",
                    DEFAULT: "#6152df",
                },
                green: {
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: "#064E3B",
                    DEFAULT: "#10B981",
                },
                gray: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: "#171717",
                    DEFAULT: "#737373",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}