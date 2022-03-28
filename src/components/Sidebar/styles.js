import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid #fff;
  }

`;

export const SidebarContainer = styled.div` 
  background-color: #000;
  width: 3.5rem;
  height: 55vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  /* color: #fff; */

  /* .icones {
    color: #fff;
  } */
`;

export const SlideBar = styled.ul`
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;

  color: #fff;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  background-color: #000;

  position: absolute;
  top: 6rem;
  left: 0;
`;

export const Item = styled.li`
  color: #fff;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  /* align-items: center; */
  padding-left: 1rem;

  /* &.icones {
    width: 1.2rem;
    height: auto;

    color: #b2b2b2;
    font-size: 2rem;
  } */

  &:hover {
    border-right: 4px solid #fff;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  } 

  img {
      width: 1.2rem;
      height: auto;
      filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
        brightness(78%) contrast(85%);
  }
`;

export const Text = styled.span`
  width: ${props => props.clicked ? "100%" : "0"};
  overflow: hidden;
  margin-left: ${props => props.clicked ? "1.5rem" : "0"};
  white-space: nowrap;
  transition: all 0.3s ease 0s;
`;


export const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Button = styled.button`
  background-color: #000;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::before, &::after {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease 0s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const Profile = styled.div`
  width: ${props => props.clicked ? "14rem" : "3rem"};
  height: 3rem;
  /* padding: ${props => props.clicked ? "0.5rem 1rem" : "3px"}; */

  padding: 0.5rem 1rem;
  /* border: 2px solid #fff; */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.clicked ? "9rem" : "0"};

  background-color: #000;
  color: #fff;

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid gray;
      padding: 2px;
    }

  }
`;

export const Details = styled.div`
  display: ${props => props.clicked ? "flex" : "none"};
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;