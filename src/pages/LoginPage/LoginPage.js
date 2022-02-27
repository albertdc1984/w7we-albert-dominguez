import styled from "styled-components";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <>
      <Div>
        <Header buttons={false} />
        <LoginForm classname={"login-form"} />
      </Div>
    </>
  );
};

export default LoginPage;
