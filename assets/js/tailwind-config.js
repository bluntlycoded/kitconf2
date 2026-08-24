tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand:   '#14396E',
        primary: '#1E7C88',
        accent:  '#26709B',
        leaf:    '#4FA83F',
        mint:    '#7FD0D8',
        sprout:  '#8BD97A',
        circuit: '#35C4E8',
      },
      screens: { xs: '420px' },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .8s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
};
