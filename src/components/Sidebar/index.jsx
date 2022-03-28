import React, { useState } from "react";
import {
  Container,
  Button,
  Logo,
  SidebarContainer,
  SlideBar,
  Item,
  Text,
  Profile,
  Details,
  Name,
  Logout,
} from "./styles";
import logoHorizon from "../../assets/logo-horizon.png";
import iconHome from "../../assets/home-solid.svg";
import iconSocial from "../../assets/social.svg";
import iconSceduled from "../../assets/sceduled.svg";
import iconDraft from "../../assets/draft.svg";
import iconStarred from "../../assets/starred.svg";
import powerOffSolid from "../../assets/power-off-solid.svg";

export function Sidebar() {
  const [click, setClick] = useState(false);
  const [profileClick, setProfileClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <>
      <Container>
        <Button clicked={click} onClick={handleClick}>
          Click
        </Button>

        <SidebarContainer>
          <Logo>
            <img src={logoHorizon} alt="logo" />
          </Logo>

          <SlideBar clicked={click}>
            <Item>
              <img src={iconHome} alt="" />
              <Text clicked={click}>início</Text>
            </Item>

            <Item>
              <img src={iconSocial} alt="" />
              <Text clicked={click}>Meus Cursos</Text>
            </Item>

            <Item>
              <img src={iconSceduled} alt="" />
              <Text clicked={click}>Calendario</Text>
            </Item>

            <Item>
              <img src={iconDraft} alt="" />
              <Text clicked={click}>Projetos</Text>
            </Item>

            <Item>
              <img src={iconStarred} alt="" />
              <Text clicked={click}>Salvos</Text>
            </Item>
          </SlideBar>

          <Profile clicked={profileClick}>
            <img
              onClick={handleProfileClick}
              src="https://picsum.photos/200"
              alt="Imagem do perfil"
            />
            <Details clicked={profileClick}>
              <Name>
                <h4>Gustavo</h4>
                <a href="#">Ver perfil</a>
              </Name>

              <Logout>
                <img src={powerOffSolid} alt="" />
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
      </Container>
    </>
  );
}
