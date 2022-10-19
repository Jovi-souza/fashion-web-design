import { styled } from "../../../../../styles/stitches.config";

export const SubscribeContainer = styled('div', {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  marginTop: '5rem',
  gap: "2rem",

  '& div': {
    '&:last-child': {
      display: 'flex',
      gap: "1rem"
    }
  },

  '& h2': {
    fontSize: "1.75rem",
    fontWeight: "lighter",
  },

  '& span': {
    display: "block",
    color: "$baseParagraph",
    textAlign: "center"
  },

  '& input': {
    color: "$baseSubText",
    padding: "1rem",
    border: '1px solid $baseParagraph',
  },

  '& button': {
    color: "White",
    backgroundColor: '$baseSubText',
    border: 'none',
    padding: "1rem 2rem"
  },
  
  '@bp2': {
    '& h2': {
      fontSize: "2.5rem",
    },
    
    '& span': {
      fontSize: "1.75rem",
    },

    '& input': {
      width: '25rem'
    },
  }
})