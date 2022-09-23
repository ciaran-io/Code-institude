/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      backgroundColor: {
        'theme-base': 'var(--theme-base)',
        'theme-base-100': 'var(--theme-base-100)',
        'theme-base-200': 'var(--theme-base-200)',

        'theme-gray': 'var(--theme-gray)',
        'theme-gray-100': 'var(--theme-gray-100)',
        'theme-gray-500': 'var(--theme-gray-500)',
        'theme-gray-600': 'var(--theme-gray-600)',
      },
      colors: {
        'theme-base': 'var(--theme-base)',
        'theme-base-100': 'var(--theme-base-100)',
        'theme-base-200': 'var(--theme-base-200)',

        'theme-gray': 'var(--theme-gray)',
        'theme-gray-100': 'var(--theme-gray-100)',
        'theme-gray-500': 'var(--theme-gray-500)',
        'theme-gray-600': 'var(--theme-gray-600)',
      },
      spacing: {
        gutter: 'var(--gutter)',
      },
      borderRadius: {
        base: 'var(--rounded-base)',
      },
      boxShadow: {
        primary: 'var(--shadow-primary)',
        'base-1': 'var(--shadow-shadow-base-1)',
        'base-2': 'var(--shadow-shadow-base-2)',
      },
    },
  },
}
