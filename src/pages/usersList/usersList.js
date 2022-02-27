import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import UserCard from "../../components/UserCard/UserCard";
import { loadUsersThunk } from "../../redux/thunks/usersThunk";

const UsersList = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ul>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
