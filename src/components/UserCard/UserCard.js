import styled from "styled-components";

const Div = styled.div`
  width: 120px;
  height: 250px;
  margin: 50px;
  display: flex;
  justify-content: center;
  background-color: crimson;
`;
const List = styled.ul`
  list-style: none;
`;

const UserCard = ({ user }) => {
  return (
    <Div>
      <List>
        <li>{user.name}</li>
        <li>{`@${user.username}`}</li>
        <li>{user.friends}</li>
        <li>{user.enemies}</li>
      </List>
    </Div>
  );
};

export default UserCard;
