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
})