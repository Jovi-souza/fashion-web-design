import { FooterContainer, FooterItems } from "./styles";
import Logo from '../../../assets/LogoFooter.svg'
import { FacebookLogo, LinkedinLogo, MapPin, TwitterLogo } from "phosphor-react";

export function Footer() {
  return(
    <FooterContainer>
      <FooterItems>
        <img src={Logo} alt="Logo" />
        <p> <MapPin size={16} weight="bold" /> 401, São Paulo</p>
        <div>
          <TwitterLogo size={16} weight="fill" color="white" />
          <FacebookLogo size={16} weight="fill" color="white" />
          <LinkedinLogo size={16} weight="fill" color="white" />
        </div>
      </FooterItems>
      <FooterItems>
        <h1>company</h1>
        <ul>
          <li>Carrer</li>
          <li>About us</li>
          <li>Terms</li>
          <li>Policy</li>
        </ul>
      </FooterItems>
      <FooterItems>
        <h1>Explore</h1>
        <ul>
          <li>News</li>
          <li>Blog</li>
          <li>Sitemaps</li>
        </ul>
      </FooterItems>
      <FooterItems>
        <h1>Services</h1>
        <ul>
          <li>Perks</li>
          <li>Platinum card</li>
          <li>Hero card</li>
          <li>Cash free</li>
        </ul>
      </FooterItems>
    </FooterContainer>
  )
}