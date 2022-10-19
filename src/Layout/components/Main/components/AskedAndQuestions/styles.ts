import { styled } from "../../../../../styles/stitches.config";
import * as Accordion from '@radix-ui/react-accordion';

export const QuestionsContainer = styled('div', {
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "5rem",
})

export const Root = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: "column",
  gap: "1.5rem",
  
  '@bp1': {
    gap: "2.5rem",
    flexDirection: "row",
  }
})

export const Trigger = styled(Accordion.Trigger, {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  border: "none",
  fontSize: "1.10rem",
  fontWeight: "bolder",

  backgroundColor: "White",

  '@bp2': {
    fontSize: "1.5rem",
  },

  '@bp3': {
    fontSize: "1.75rem",
  },
})

export const Content = styled(Accordion.Content, {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  width: "25rem",
  marginTop: "1rem",
  color: "$baseParagraph",

  '@bp2': {
    fontSize: "1.25rem",
    width: "30rem",
  },
  
  '@bp3': {
    fontSize: "1.5rem",
    width: "35rem",
  },
})
