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
        'fade-down': 'intro 0.3s ease-in'
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
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontWeight: ['focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
