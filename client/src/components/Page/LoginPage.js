import React from "react";
import styled from "styled-components/macro";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Splashlogo from "../../assets/logo_JRK.svg";

const LoginPageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  height: 50%;
  min-height: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;

  img {
    height: 33vw;
  }
`;

const Formular = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-row: 2;
  position: fixed;
  bottom: 10px;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const InputfieldsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  gap: 15px;

  p {
    color: var(--secondary-color);
    display: flex;

    margin: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ButtonContainer = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 20px;
  padding: 15px;

  Button:nth-child(1) {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  Button {
    font-size: 1rem;
  }
`;

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <Logo>
        <img src={Splashlogo} alt="Just Run Köln" />
      </Logo>
      <Formular>
        <InputfieldsContainer>
          <InputContainer>
            <p>Username</p>
            <Input></Input>
          </InputContainer>
          <InputContainer>
            <p>Password</p>
            <Input></Input>
          </InputContainer>
        </InputfieldsContainer>

        <ButtonContainer>
          <Button>Log In</Button>
          <Button>Create Account</Button>
        </ButtonContainer>
      </Formular>
    </LoginPageContainer>
  );
}
