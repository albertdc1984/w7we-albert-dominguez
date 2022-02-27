const UserCard = ({ user }) => {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.friends}</li>
        <li>{user.enemies}</li>
      </ul>
    </div>
  );
};

export default UserCard;
