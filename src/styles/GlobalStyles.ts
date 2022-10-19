import { globalCss } from './stitches.config'

export const GlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    listStyle: 'none',
    textDecoration: 'none',
  },

  body: {
    webkitFontSmoothing: 'antialiased',
    fontFamily: 'Poppins, sans-serif',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
  },

  button: {
    cursor: 'pointer',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
