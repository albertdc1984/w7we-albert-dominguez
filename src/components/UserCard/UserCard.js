import styled from "styled-components";

const Div = styled.div`
  width: 320px;
  height: 250px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: crimson;
`;
const List = styled.ul`
  list-style: none;
`;

const UserCard = ({ user }) => {
  return (
    <Div>
      <img className="avatar" src={user.image} alt={user.username} />
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
