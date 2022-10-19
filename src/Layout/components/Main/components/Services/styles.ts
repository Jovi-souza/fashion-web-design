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
  },

  "@bp2": {
    gap: "6rem"
  },

  "@bp3": {
    gap: "10rem"
  },
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
  },

  "@bp2": {
    '& strong': {
      fontSize: '1.75rem'
    },
    
    '& p': {
      fontSize: '1.25rem'
    }, 

    '& img': {
      width: "10rem"
    }
  },

  "@bp3": {
    '& strong': {
      fontSize: '2rem'
    },
    
    '& p': {
      fontSize: '1.5rem',
      width: '30rem',
    }, 

    '& img': {
      width: "12rem"
    }
  }
})