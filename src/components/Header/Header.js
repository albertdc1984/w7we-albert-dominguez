import styled from "styled-components";
import Button from "../Button/Button";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: red;
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

const Header = () => {
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
        <li></li>
      </List>
    </Nav>
  );
};

export default Header;