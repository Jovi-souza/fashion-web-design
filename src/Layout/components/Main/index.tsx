import { Questions } from "./components/AskedAndQuestions";
import { Deals } from "./components/Deals";
import { Services } from "./components/Services";
import { Subscriber } from "./components/Subscribe";
import { Trends } from "./components/Trends";

export function Main() {
  return(
    <div>
      <Services />
      <Trends />
      <Deals />
      <Questions />
      <Subscriber />
    </div>
  )
}