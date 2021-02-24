import React, { Component } from "react";
import styled, { css } from "styled-components";
import BgGradientBottomRight from "../components/BgGradientBottomRight";
import TextInputIcon50 from "../components/TextInputIcon50";
import TextInputIcon100 from "../components/TextInputIcon100";
import StateInputIcon from "../components/StateInputIcon";
import ZipInputIcon from "../components/ZipInputIcon";
import ButtonSmallBlue from "../components/ButtonSmallBlue";
import ButtonSmallGrey from "../components/ButtonSmallGrey";
import ButtonFancy from "../components/ButtonFancy";

function FuelQuoteForm1(props) {
  return (
    <Container>
      <BgGradientBottomRight
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></BgGradientBottomRight>
      <QuoteForm>
        <BoxHeader>
          <Center>
            <Text>FUEL QUOTE FORM</Text>
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
        <ButtonSmallBlue
          style={{
            width: 100,
            height: 44,
            marginBottom: 5
          }}
        ></ButtonSmallBlue>
        <ButtonSmallGrey
          style={{
            width: 100,
            height: 44,
            marginBottom: 20
          }}
        ></ButtonSmallGrey>
      </QuoteForm>
      <Group>
        <Logo1 src={require("../assets/images/fuel23.png")}></Logo1>
        <ButtonFancy
          button="Button"
          style={{
            height: 44,
            width: 100,
            borderRadius: 100,
            marginBottom: 50
          }}
          button="Return"
        ></ButtonFancy>
      </Group>
      <QuoteOutput>
        <BoxHeader1>
          <Center>
            <FuelQuote>FUEL QUOTE</FuelQuote>
          </Center>
        </BoxHeader1>
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
        <ButtonSmallBlue
          style={{
            width: 100,
            height: 44,
            marginBottom: 5
          }}
        ></ButtonSmallBlue>
        <ButtonSmallGrey
          style={{
            width: 100,
            height: 44,
            marginBottom: 20
          }}
        ></ButtonSmallGrey>
      </QuoteOutput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(230, 230, 230,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const QuoteForm = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  height: 468px;
  width: 340px;
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

const Text = styled.span`
  font-family: Lato;
  font-size: 20px;
  color: rgba(255,255,255,1);
  font-weight: 900;
`;

const Group = styled.div`
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
  margin-left: 60px;
  display: flex;
`;

const Logo1 = styled.img`
  width: 174px;
  height: 100%;
  margin-bottom: 400px;
  object-fit: contain;
`;

const QuoteOutput = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  height: 468px;
  width: 340px;
  display: flex;
  box-shadow: 3px 3px 6px  0.5px rgba(0,0,0,1) ;
`;

const BoxHeader1 = styled.div`
  height: 60px;
  background-color: rgba(48,116,209,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 20px;
  align-self: stretch;
  flex-direction: column;
  display: flex;
`;

const FuelQuote = styled.span`
  font-family: Lato;
  font-size: 20px;
  color: rgba(255,255,255,1);
  font-weight: 900;
`;

export default FuelQuoteForm1;
