import styled from "styled-components";

const Div = styled.div`
  width: 320px;
  height: auto;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: crimson;
`;
const Listed = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserCard = ({ user }) => {
  return (
    <Div>
      <img className="avatar" src={user.image} alt={user.username} />
      <Listed>
        <li>{user.name}</li>
        <li>{`@${user.username}`}</li>
        <li>{user.friends}</li>
        <li>{user.enemies}</li>
      </Listed>
    </Div>
  );
};

export default UserCard;
