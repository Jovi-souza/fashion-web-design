import { styled } from "../../../../../styles/stitches.config";

export const TrendsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: "8rem",
  
  '@bp1': {
    flexDirection: 'initial',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const TrendsItems = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: "center",
  gap: '1rem',

  '& h1': {
    fontWeight: 'normal',
    fontSize: "2.5rem"
  },

  '& p': {
    textAlign: "center",
    maxWidth: '40rem',
    color: "$baseParagraph"
  },

  '& button': {
    display: 'flex',
    gap: "1rem",

    border: "none",
    fontWeight: "bolder",

    padding: "1rem 2rem",
    backgroundColor: 'White'
  },

  '& img': {
    height: "20rem",
  },

  '&:last-child': {
    maxWidth: "30rem",
    flexDirection: "initial",
    flexWrap: "wrap",
    margin: 'auto'
  },

  '@bp1': {
    padding: "0 1.5rem",
    margin: "0 auto",

    '& h1': {
      width: "18rem"
    },

    '& p': {
      textAlign: "justify",
      width: "26rem"
    },

    '& button': {
      padding: "0",
    },

    '&:first-child': {
      width: '26rem',
      alignItems: 'start',
    },
  },

  '@bp2': {
    '& h1': {
      width: "28rem",
      fontSize: "4rem"
    },
    
    '& p': {
      width: "36rem",
      fontSize: "1.5rem"
    },

    '&:first-child': {
      width: '26rem',
    },

    '&:last-child': {
      maxWidth: "38rem",
    },
  },

  '@bp3': {
    '& img': {
      height: '26rem',
    },
  }
})