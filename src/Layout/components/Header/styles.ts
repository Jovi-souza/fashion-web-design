import { styled } from "../../../styles/stitches.config";

export const HeaderContainer = styled('div', {

})

export const Nav = styled('nav', {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  
  '& svg': {
    cursor: "pointer",
  },
  
  '& .open': {
    right: "0",
    transition: 'ease-in .3s',
  },
  
  '& .close': {
    right: "-15rem",
    transition: 'ease-out .2s',
  },
  
  "@bp1": {
    '& > svg': {
      display: "none",
    },
  }
})

export const HeaderNavBar = styled('div', {
  position: "absolute",
  right: "0",
  top: "0",

  padding: "3rem",
  height: "100%",

  backgroundColor: "$blue",
  color: "White",
  fontSize: "1.5rem",
  
  '& li': {
    cursor: "pointer",
    width: "max-content",
  },

  "@bp1": {
    display: "flex",
    flexDirection: "row",
    gap: "6rem",

    position: "initial",

    padding: "0",

    backgroundColor: "white",
    
    '& li': {
      color: "$baseText",
    },
  }
})

export const NavLinks = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",

  "@bp1" : {
    flexDirection: "row",
    gap: "2rem",
  }
})

export const NavLogin = styled('div', {
  marginTop: "1rem",

  '& li':{
    padding: "1rem 1.5rem",

    '&:last-child':{
      backgroundColor: "$baseText"
    }
  },

  "@bp1" : {
    display: 'flex',
    marginTop: "0",

    '& li':{
      '&:last-child':{
        color: "white"
      }
    },
  }
})

export const HeaderContent = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: 'self-end',

  '& img': {
    display: "none",
  },

  "@bp1": {
    flexDirection: "row",
    alignItems: 'initial',
    justifyContent: "center",

    '& img': {
      display: "flex",
      minWidth: "6rem",
      maxWidth: "40rem",
    },
  },
})

export const WrapContent = styled('div', {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  margin: "0 auto",
  color: "$baseText",

  '& h1': {
    fontSize: "2rem",
    fontWeight: "normal",
    maxWidth: "40rem"
  },
  
  '& span': {
    color: "$blue",
    textTransform: "uppercase",
    fontWeight: "bolder"
  },

  '& button': {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: '.5rem',

    padding: '1rem',
    border: "none",
    color: "White",
    backgroundColor: "$baseText",
    
    "&:last-child": {
      backgroundColor: "white",
      color: '$blue',
      fontWeight: 'bolder'
    }
  },

  '& div': {
    display: 'flex',
    gap: '1.5rem',
    marginTop: "4rem"
  },

  "@bp1": {
    minWidth: "24rem",

    '& h1': {
      fontSize: "2.75rem",
    },
    
    '& span': {
      fontSize: '1.5rem'
    },
  },

  "@bp2": {
    margin: "0",
    '& h1': {
      fontSize: "3.5rem",
    },
    
    '& span': {
      fontSize: '1.5rem'
    },
  },
})
