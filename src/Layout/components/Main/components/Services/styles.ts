import { styled } from "../../../../../styles/stitches.config";

export const ServicesContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  flexWrap: 'wrap',
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",

  "@bp1": {
    flexDirection: "row",
    flexWrap: 'wrap',
  }
})

export const ServicesItems = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  '& strong': {
    fontWeight: "bolder",
    fontSize: '1.5rem'
  },

  '& p': {
    width: '20rem',
    textAlign: "center",
    color: "$baseParagraph"
  }, 

  "@bp1": {
    '& img': {
      width: "8rem"
    }
  }
})