import { Link } from "gatsby"
import { GiAfrica} from "react-icons/Gi"
import styled from "styled-components"


export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "white"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "#fff")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  position: sticky;
`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  /* position: relative;
  right: 7rem; */
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  
`

export const NavIcon = styled(GiAfrica)`
display: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.25s ease;
    background: #fff;
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: 'Chelsea Market',sans-serif;
  text-decoration: none;
  font-size: 22px;

  &:focus{
      color: darkblue;
    }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 27px;

    &:hover {
      /* color: #ff4040; */
      transition: all 0.3s ease;
      background-color:lightblue;
    }

  
  }
`

