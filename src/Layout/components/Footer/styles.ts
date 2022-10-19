import { styled } from "../../../styles/stitches.config";

export const FooterContainer = styled('div', {
  display: 'flex',
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",

  padding: "2rem",
  marginTop: "8rem",

  backgroundColor: '#000',

  '& img': {
    width: "2rem"
  },

  '& p': {
    fontSize: "1.5rem"
  },

  '& div': {
    '&:first-child': {
      display: "flex",
      flexDirection: "column",
      gap: '1rem'
    }
  },

  '@bp2': {
    gap: "7rem",
  },

  '@bp3': {
    gap: "10rem",
  },

})

export const FooterItems = styled('div', {
  color: "white",
  width: '12rem',

  '& li': {
    color: "$blue",
    cursor: "pointer"
  },

  '& div': {
    display: "flex",
    gap: "1rem"
  },

  '@bp2': {
    '& h1': {
      fontSize: "1.5rem"
    },

    '& li': {
      fontSize: "1.25rem"
    },
  },
  
  '@bp3': {
    '& li': {
      fontSize: ""
    },
  },
})