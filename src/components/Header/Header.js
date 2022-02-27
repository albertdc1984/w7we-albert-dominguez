import styled from "styled-components";
import Button from "../Button/Button";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: red;
  top: 0;
  position: fixed;
  color: white;
  width: 100vw;
  height: 10vh;
  justify-content: space-between;
`;

const H1 = styled.h1`
  margin: 15px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 20vw;
  justify-content: space-around;
`;

const Header = ({ buttons }) => {
  if (buttons) {
    return (
      <Nav className="header-nav">
        <H1>BLACKFLAGGER</H1>
        <List>
          <li>
            <Button text={"Login"} />
          </li>
          <li>
            <Button text={"Sign In"} />
          </li>
        </List>
      </Nav>
    );
  } else {
    return (
      <Nav className="header-nav">
        <H1>BLACKFLAGGER</H1>
      </Nav>
    );
  }
};

export default Header;
