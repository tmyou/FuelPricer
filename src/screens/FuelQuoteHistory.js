import React, { Component } from "react";
import styled, { css } from "styled-components";
import TextState from "../components/TextState";
import TextZip from "../components/TextZip";
import ButtonSmallBlue from "../components/ButtonSmallBlue";
import ButtonSmallGrey from "../components/ButtonSmallGrey";
import { Link } from "react-router-dom";
import ButtonFancy from "../components/ButtonFancy";
import ReactList from "react-list";

function FuelQuoteHistory(props) {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(215deg, rgba(242,213,153,1) 20%, #FFFFFF 90%)`
      }}
    >
      <QuoteForm>
        <BoxHeader>
          <Center>
            <Text>FUEL QUOTE FORM</Text>
          </Center>
        </BoxHeader>
        <TextState
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></TextState>
        <TextZip
          style={{
            width: 300,
            height: 35,
            marginBottom: 15
          }}
        ></TextZip>
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
        <Link to="/Dashboard">
          <Button>
            <ButtonOverlay>
              <ButtonFancy
                button="Button"
                style={{
                  height: 44,
                  width: 100,
                  borderRadius: 100,
                  marginBottom: 0
                }}
                button="Return"
              ></ButtonFancy>
            </ButtonOverlay>
          </Button>
        </Link>
      </Group>
      <QuoteOutput>
        <BoxHeader1>
          <Center>
            <FuelQuote>FUEL QUOTE</FuelQuote>
          </Center>
        </BoxHeader1>
        <TextState
          style={{
            width: 300,
            height: 35,
            marginBottom: 10
          }}
        ></TextState>
        <TextZip
          style={{
            width: 300,
            height: 35,
            marginBottom: 15
          }}
        ></TextZip>
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
  background-color: rgba(230, 230, 230, 1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const QuoteForm = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 468px;
  width: 340px;
  display: flex;
  box-shadow: 3px 3px 6px 0.5px rgba(0, 0, 0, 1);
`;

const BoxHeader = styled.div`
  height: 60px;
  background-color: rgba(48, 116, 209, 1);
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

  ${(props) =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
    `};

  ${(props) =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
    `};
`;

const Text = styled.span`
  font-family: Lato;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
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

const Button = styled.div`
  flex-direction: column;
  width: 100px;
  height: 44px;
  margin-bottom: 50px;
  border: none;
`;

const QuoteOutput = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 468px;
  width: 340px;
  display: flex;
  box-shadow: 3px 3px 6px 0.5px rgba(0, 0, 0, 1);
`;

const BoxHeader1 = styled.div`
  height: 60px;
  background-color: rgba(48, 116, 209, 1);
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
  color: rgba(255, 255, 255, 1);
  font-weight: 900;
`;

export default FuelQuoteHistory;
