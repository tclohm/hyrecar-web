module.exports = {
  purge: ['.src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
	  		pink: {
	  			banner: '#FEA9F3'
	  		}
  		},
      height: {
        'screen-90': '89vh'
      },
      animation: {
        'fade-down': 'intro 0.3s ease-in',
        'progress-1': 'grow-1 0.3s ease-out',
        'progress-2': 'grow-2 0.3s ease-out',
        'progress-3': 'grow-3 0.3s ease-out',
        'progress-4': 'grow-4 0.3s ease-out',
        'progress-1-reverse': 'grow-1 0.3s ease-out reverse',
        'progress-2-reverse': 'grow-2 0.3s ease-out reverse',
        'progress-3-reverse': 'grow-3 0.3s ease-out reverse',
        'progress-4-reverse': 'grow-4 0.3s ease-out reverse',
      },
      keyframes: {
        intro: {
          '0%': { 
                    transform: 'translate(0, -3rem)',
                    opacity: '0'
                 },
          '100%': {
                    transform: 'translate(0, 0rem)',
                    opacity: '1'
                 }
        },
        'grow-1': {
          '0%': {
                    width: '0%'
                },
          '100%': {
                    width: '25%'
                }
        },
        'grow-2': {
          '0%': {
                    width: '25%'
                },
          '100%': {
                    width: '50%'
                }
        },
        'grow-3': {
           '0%': {
                    width: '50%'
                  },
           '100%': {
                    width: '75%',
                  }
        },
        'grow-4': {
            '0%': {
                    width: '75%',
                },
            '100%': {
                    width: '91.666667%',
            }
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontWeight: ['focus'],
      borderWidth: ['hover', 'focus'],
      animation: ['focus-within']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
