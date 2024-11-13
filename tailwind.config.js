// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-color': '#6B3CC9',
                'secondary-color': '#F28D35',
                'analogous-color-one': '#6A44F2',
                'analogous-color-two': '#1CBDDD',
                'triadic-color-one': '#52378C',
                'dark-color': '#4DCA79',
                'text-color': '#2F2F2F',
                'text-color-light': '#545A75',
                'accent-color-white': '#E2F2FE',
                'accent-color-yarn': '#FFF8E0',
                'error-color': '#FF0335',
                lavender: '#FAF8FF',
            },
            fontFamily: {
                popins: ['Poppins'],
            },
        },
    },
    plugins: [],
};
