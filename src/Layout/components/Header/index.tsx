import { HeaderContainer, HeaderContent, HeaderNavBar, Nav, NavLinks, NavLogin, WrapContent } from "./styles";
import Logo from '../../../assets/Logo.svg'
import Model from '../../../assets/Model.svg'
import { List, PlayCircle, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState("open")

  function toogleMenu() {
    setIsOpen(isOpen === "close" ? "open" : "close")
  }

  return(
    <HeaderContainer>
      <Nav>
        <img src={Logo} alt="Logo" />
        <List size={24} onClick={toogleMenu} />
        <HeaderNavBar className={isOpen}>
          <NavLinks>
            <X size={24} onClick={toogleMenu} />
            <li>Features</li>
            <li>Services</li>
            <li>termns</li>
            <li>About</li>
          </NavLinks>
          <NavLogin>
            <li>Log in</li>
            <li>Sign up</li>
          </NavLogin>
        </HeaderNavBar>
      </Nav>
      <HeaderContent>
        <WrapContent>
          <span>Summer Collection</span>
          <h1>When you are in doubt, wear Denim</h1>
          <div>
            <button>Buy now</button>
            <button> <PlayCircle size={20} weight={'bold'}/> Play video</button>
          </div>
        </WrapContent>
        <img src={Model} alt="Model" />
      </HeaderContent>
    </HeaderContainer>
  )
}