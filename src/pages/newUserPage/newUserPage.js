import styled from "styled-components";
import Header from "../../components/Header/Header";
import NewUser from "../../components/NewUser/NewUser";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
`;

const NewUserPage = () => {
  return (
    <>
      <Div>
        <Header buttons={false} />
        <NewUser classname={"login-form"} />
      </Div>
    </>
  );
};

export default NewUserPage;
