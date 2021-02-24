import React, { Component } from "react";
import styled, { css } from "styled-components";
import BgGradientTop from "../components/BgGradientTop";
import TextInputIcon from "../components/TextInputIcon";
import PassInputIcon from "../components/PassInputIcon";
import { Link } from "react-router-dom";
import ButtonSmallBlue from "../components/ButtonSmallBlue";
import ButtonSmallGrey from "../components/ButtonSmallGrey";

function Splash(props) {
  return (
    <Container>
      <BgGradientTop
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }}
      ></BgGradientTop>
      <Logo src={require("../assets/images/fuel23.png")}></Logo>
      <SignInDialog>
        <BoxHeader>
          <Header1>ACCOUNT SIGN IN</Header1>
        </BoxHeader>
        <TextInputIcon
          inputStyle="Label"
          style={{
            width: 300,
            height: 35,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10
          }}
          inputStyle="User ID"
        ></TextInputIcon>
        <PassInputIcon
          style={{
            width: 300,
            height: 35,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 20
          }}
        ></PassInputIcon>
        <Link to="/Dashboard">
          <SignIn>
            <ButtonOverlay>
              <ButtonSmallBlue
                button="Button"
                style={{
                  width: 100,
                  height: 44,
                  margin: 0,
                  marginBottom: 0
                }}
                button="Sign In"
              ></ButtonSmallBlue>
            </ButtonOverlay>
          </SignIn>
        </Link>
        <Link to="/Registration">
          <Register>
            <ButtonOverlay>
              <ButtonSmallGrey
                style={{
                  width: 100,
                  height: 44,
                  margin: 0
                }}
                caption="Register"
              ></ButtonSmallGrey>
            </ButtonOverlay>
          </Register>
        </Link>
      </SignInDialog>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Logo = styled.img`
  width: 174px;
  height: 100%;
  object-fit: contain;
`;

const SignInDialog = styled.div`
  flex-direction: column;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;
  display: flex;
  box-shadow: 3px 3px 6px  0.5px rgba(0,0,0,1) ;
`;

const BoxHeader = styled.div`
  height: 60px;
  background-color: rgba(48,116,209,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 340px;
  margin: 0px;
  margin-bottom: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Header1 = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  color: rgba(255,255,255,1);
  font-size: 20px;
  align-self: center;
`;

const SignIn = styled.div`
  flex-direction: column;
  width: 100px;
  height: 44px;
  padding: 0px;
  margin-bottom: 5px;
  border: none;
`;

const Register = styled.div`
  flex-direction: column;
  width: 100px;
  height: 44px;
  margin-bottom: 15px;
  border: none;
`;

export default Splash;
