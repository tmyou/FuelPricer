import React, { Component } from "react";
import styled, { css } from "styled-components";
import BgGradientTop from "../components/BgGradientTop";
import TextInputIcon50 from "../components/TextInputIcon50";
import TextInputIcon100 from "../components/TextInputIcon100";
import StateInputIcon from "../components/StateInputIcon";
import ZipInputIcon from "../components/ZipInputIcon";
import { Link } from "react-router-dom";
import ButtonSmallBlue from "../components/ButtonSmallBlue";
import ButtonSmallGrey from "../components/ButtonSmallGrey";

function ProfileManagement(props) {
  return (
    <Container>
      <BgGradientTop
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }}
      ></BgGradientTop>
      <LogoSmall src={require("../assets/images/fuel23.png")}></LogoSmall>
      <ProfileDialog>
        <BoxHeader>
          <Center>
            <Header1>ACCOUNT SIGN IN</Header1>
          </Center>
        </BoxHeader>
        <TextInputIcon50
          style={{
            width: 300,
            height: 35,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10
          }}
        ></TextInputIcon50>
        <TextInputIcon100
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></TextInputIcon100>
        <TextInputIcon100
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></TextInputIcon100>
        <TextInputIcon100
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></TextInputIcon100>
        <StateInputIcon
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></StateInputIcon>
        <ZipInputIcon
          style={{
            width: 300,
            height: 35,
            marginBottom: 15
          }}
        ></ZipInputIcon>
        <Link to="/Dashboard">
          <UpdateProfile>
            <ButtonOverlay>
              <ButtonSmallBlue
                style={{
                  height: 44,
                  margin: 0,
                  width: 145
                }}
                button="Update Profile"
              ></ButtonSmallBlue>
            </ButtonOverlay>
          </UpdateProfile>
        </Link>
        <DiscardChanges>
          <ButtonOverlay onClick={() => props.history.goBack()}>
            <ButtonSmallGrey
              style={{
                width: 180,
                height: 44,
                margin: 0
              }}
              caption="Discard Changes"
            ></ButtonSmallGrey>
          </ButtonOverlay>
        </DiscardChanges>
      </ProfileDialog>
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
const LogoSmall = styled.img`
  width: 130px;
  height: 100%;
  object-fit: contain;
`;

const ProfileDialog = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  box-shadow: 3px 3px 6px  0.5px rgba(0,0,0,1) ;
`;

const BoxHeader = styled.div`
  height: 60px;
  background-color: rgba(48,116,209,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 20px;
  align-self: stretch;
  flex-direction: column;
  display: flex;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const Header1 = styled.span`
  font-family: Lato;
  font-size: 20px;
  color: rgba(255,255,255,1);
  font-weight: 900;
`;

const UpdateProfile = styled.div`
  flex-direction: column;
  width: 145px;
  height: 44px;
  margin-bottom: 5px;
  align-items: center;
  border: none;
`;

const DiscardChanges = styled.div`
  flex-direction: column;
  width: 197px;
  height: 44px;
  margin-bottom: 15px;
  align-items: center;
  border: none;
`;

export default ProfileManagement;
