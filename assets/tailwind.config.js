module.exports = {
    theme: {
        extend: {
            backdropBlur: {
                md: '60px',
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    variants: {
        extend: {
            backdropBlur: ['responsive', 'hover', 'focus'],
        },
    },
    plugins: [],
}