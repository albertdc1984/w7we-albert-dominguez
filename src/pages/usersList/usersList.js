import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import UserCard from "../../components/UserCard/UserCard";
import { loadUsersThunk } from "../../redux/thunks/usersThunk";

const Div = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const UsersList = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return (
    <Div>
      <Header />
      <ul>
        {users.map((user) => {
          return <UserCard user={user} key={user._id} />;
        })}
      </ul>
    </Div>
  );
};

export default UsersList;
