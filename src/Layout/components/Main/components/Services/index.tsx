import TruckFast from '../../../../../assets/TruckFast.svg'
import TruckEasyReturn from '../../../../../assets/TruckEasyReturn.svg'
import Security from '../../../../../assets/Security.svg'

import { ServicesContainer, ServicesItems } from './styles'

export function Services() {
  return(
    <ServicesContainer>
      <ServicesItems>
        <img src={TruckFast} alt="icones" />
        <strong>Free delivery</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
      </ServicesItems>
      <ServicesItems>
        <img src={TruckEasyReturn} alt="icones" />
        <strong>Easy returns</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
      </ServicesItems>
      <ServicesItems>
        <img src={Security} alt="icones" />
        <strong>Secured payment</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
      </ServicesItems>
    </ServicesContainer>
  )
}