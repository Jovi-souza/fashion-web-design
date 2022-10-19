import { styled } from "../../../../../styles/stitches.config";

export const DealsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: "8rem",

  '@bp1': {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '@bp2': {
    gap: '7rem'
  },

  '@bp3': {
    gap: '10rem'
  },

})

export const DealsItems = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: "center",
  gap: '1rem',

  '& h1': {
    textAlign: "center",
    fontWeight: 'normal',
    fontSize: "2.5rem"
  },

  '& p': {
    textAlign: "center",
    maxWidth: '40rem',
    color: '$baseParagraph'
  },

  '& button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    gap: "1rem",

    border: "none",
    fontWeight: "bolder",

    padding: "1rem 2rem",
    backgroundColor: 'White'
  },

  '& img': {
    width: "13rem"
  },

  '&:last-child': {
    justifyContent: "center",
    maxWidth: "40rem",
    flexDirection: "initial",
    flexWrap: "wrap",
  },

  '& div': {
    display: "flex",
    alignItems: "center",

    color: "White",
    backgroundColor: "$blue",

    fontWeight: "lighter",
    fontSize: '5rem',
    textAlign: "center",

    height: '20rem',
    width: "13rem"
  },

  '@bp1': {
    margin: "0 auto",
    
    '& h1': {
      width: "20rem"
    },

    '& p': {
      textAlign: "justify",
    },

    '& button': {
      padding: "0",
    },

    '& img': {
      width: "14rem"
    },

    '& div': {
      width: "14rem",
      height: "21.5rem"
    },

    '&:first-child': {
      width: '22rem',
      alignItems: 'start',
    },

    '&:last-child': {
      width: '30rem',
      alignItems: 'start',
    }
  },

  '@bp2': {
    margin: "0 10rem 0 -7rem",
    '& h1': {
      fontSize: "4rem",
      width: "30rem"
    },
    
    '& p': {
      width: "36rem",
      fontSize: "1.5rem"
    },

    '&:first-child': {
      width: "16rem",
      alignItems: "flex-start",
    },
  },

  '@bp3': {
    margin: "0 18rem 0 -7rem",

    '& img': {
      width: '16rem'
    },
    
    '& div': {
      width: "16rem",
      height: "24.5rem",
    },

    '&:last-child': {
      width: '40rem',
    }
  }
})
