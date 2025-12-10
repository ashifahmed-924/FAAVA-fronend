const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
        backgroundImage: {
        'feedback-bg': "radial-gradient(63.03% 100% at 0% 0%, #FBCD61 0%, #0D0D0D 100%);",
        'custom-text-gradient': "linear-gradient(90deg, rgba(94, 111, 108, 0.95) 19.79%, rgba(251, 205, 97, 0.95) 100%)",
  },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        blueSoft: "0 4px 4px 0 #4285F4",
        'inner': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.3)',
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
        yelow: '2px solid rgba(135deg, #FBCD61 10.42%, #0E2925 100%);'
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '1.4' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      colors: {
        'custom-bg-gray': '#2A3F58',
        'primary': '#FAC03A',
        'bt-hover': '#5b8bcaff',
        'gradient': '#EEF7FF',
        'gradient-2': '#BCE3FF',
        'bg-blue': '#D9E4F2',
        'bg-gray': 'rgba(84, 92, 102, 0.04)',
        'page-bg': '#F5F6FA',
        'optional-1': '#5C7E8E',
        'yellow-1': '#FBBC05',
        'grey-1': '#959595',
        'green-1': '#00B69B',
        'reviewbar-bg': '#F7EAE2',
        'secondary': '#8C9291',
        'secondary-500': '#0E2824',
        'customGray': '#6B7280', 
        'custombg': 'rgba(84,92,102,0.04)',
        'ben-bg': '#EBEEFF',
        'card': '#9CA3AF',
        'optional-2':'#85AAB9',
        'dark-25': '#F9F9F9',
        'circle': '#FFF9EB;'
        
      },
      screens: {
        xs: '480px',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
        '13xl': '128rem',
      },
      width: {
      '14': '14rem',
      '16': '16rem',
      '18': '18rem',
      '36': '36rem',
      '50': '50rem',
      '56': '56rem',
      '62': '62rem',
    },
      zIndex: {
        60: '60',
      },
    },
    maxHeight: {
      '100': '27rem',
      '120': '32rem',
      '140': '48rem',
      '160': '60rem',
      '180': '72rem',
      '200': '84rem',
    }
  },
  plugins: [
    addVariablesForColors,
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      }, ['responsive']);
    }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
