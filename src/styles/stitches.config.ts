import { createStitches } from '@stitches/react'

export const { styled, globalCss, createTheme, css } = createStitches({
  utils: {
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      blue: '#56CCF2',
      baseText: '#080F05',
      baseSubText: '#20211f',
      baseParagraph: '#9B9B9B',
    },
    space: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
    },
    width: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
    },
    fontSizes: {
      1: '1.6rem',
      2: '2rem',
      3: '2.4rem',
      4: '3.2rem',
      5: '3.6rem',
      6: '4rem',
    },
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    shadows: {
      button: '2px 2px 5px rgba(0, 0, 0, 0.25)',
    },
    zIndices: {},
    transitions: {},
  },
})
