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

const UserNameInput = styled.div``;

const PasswordInput = styled.div``;

const LoginButton = styled.button``;

const CreateAccountButton = styled.button``;

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
        <Button />
      </LoginButton>
      <CreateAccountButton>
        <Button />
      </CreateAccountButton>
    </div>
  );
}
