import { TrendsContainer, TrendsItems } from "./styles";
import Model1 from '../../../../../assets/Men-01.svg'
import Model2 from '../../../../../assets/Men-02.svg'
import Model3 from '../../../../../assets/Woman-01.svg'
import Model4 from '../../../../../assets/Woman-02.svg'
import { ArrowRight } from "phosphor-react";

export function Trends() {
  return(
    <TrendsContainer>
      <TrendsItems>
        <h1>Trending this week</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
        <button>Shop now <ArrowRight size={16}/> </button>
      </TrendsItems>
      <TrendsItems>
        <img src={Model1} alt="Model-1" />
        <img src={Model2} alt="Model-2" />
        <img src={Model3} alt="Model-3" />
        <img src={Model4} alt="Model-4" />
      </TrendsItems>
    </TrendsContainer>
  )
}