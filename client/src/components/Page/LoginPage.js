import React from "react";
import styled from "styled-components/macro";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Splashlogo from "../../assets/logo_JRK.svg";

const Logo = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--primary-color);
  img {
    height: 20vh;
    width: 80vw;
  }
`;

const UserNameInput = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  Input {
    height: 40px;
    width: 80%;
    margin: 10px 15px;
  }
`;

const PasswordInput = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  Input {
    height: 40px;
    width: 80%;
    margin: 10px 15px;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0px;
  Button {
    height: 40px;
    width: 80%;
  }
`;

const CreateAccountButton = styled.button`
  display: flex;
  justify-content: center;
`;

export default function LoginPage() {
  return (
    <div>
      <Logo>
        <img src={Splashlogo} alt="Just Run Köln" />
      </Logo>

      <UserNameInput>
        <Input />
      </UserNameInput>
      <PasswordInput>
        <Input />
      </PasswordInput>
      <LoginButton>
        <Button>Log In</Button>
      </LoginButton>
      <CreateAccountButton>
        <Button />
      </CreateAccountButton>
    </div>
  );
}
