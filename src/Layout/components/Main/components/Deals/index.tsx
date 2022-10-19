import { ArrowRight } from "phosphor-react";
import { DealsContainer, DealsItems } from "./styles";
import Model1 from '../../../../../assets/DealsModel-01.svg'
import Model2 from '../../../../../assets/DealsModel-02.svg'
export function Deals(){
  return(
    <DealsContainer>
      <DealsItems>
        <h1>Great deals on women’s wear</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
        <button>Shop now <ArrowRight size={16}/> </button>
      </DealsItems>
      <DealsItems>
        <img src={Model1} alt="Model-1" />
        <div>
          <span>50% off</span>
        </div>
        <div>
          <span>To-day</span>
        </div>
        <img src={Model2} alt="Model-2" />
      </DealsItems>
    </DealsContainer>
  )
}