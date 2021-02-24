import React, { Component } from "react";
import styled, { css } from "styled-components";
import BgGradientBottom from "../components/BgGradientBottom";
import { Link } from "react-router-dom";
import ButtonBig from "../components/ButtonBig";
import ButtonFancy from "../components/ButtonFancy";

function Dashboard(props) {
  return (
    <Container>
      <BgGradientBottom
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></BgGradientBottom>
      <Logo src={require("../assets/images/fuel23.png")}></Logo>
      <Greeting>Good afternoon, *Client*.</Greeting>
      <Prompt>Where u tryna go homie?</Prompt>
      <Navigator>
        <Link to="/FuelQuoteHistory">
          <QuoteHistory>
            <ButtonOverlay>
              <ButtonBig
                button="Button"
                style={{
                  width: 420,
                  height: 120,
                  borderTopLeftRadius: 100,
                  borderBottomLeftRadius: 100,
                  backgroundColor: "rgba(255,99,99,1)"
                }}
                button="Review Quote History"
              ></ButtonBig>
            </ButtonOverlay>
          </QuoteHistory>
        </Link>
        <Link to="/FuelQuoteForm">
          <Button5>
            <ButtonOverlay>
              <ButtonBig
                style={{
                  width: 420,
                  height: 120
                }}
                button="New Fuel Quote"
              ></ButtonBig>
            </ButtonOverlay>
          </Button5>
        </Link>
        <Link to="/ProfileManagement">
          <Button4>
            <ButtonOverlay>
              <ButtonBig
                style={{
                  width: 420,
                  height: 120,
                  borderTopRightRadius: 100,
                  borderBottomRightRadius: 100,
                  backgroundColor: "rgba(52,217,82,1)"
                }}
                button="ProfileManagement"
              ></ButtonBig>
            </ButtonOverlay>
          </Button4>
        </Link>
      </Navigator>
      <Link to="/Splash">
        <Button6>
          <ButtonOverlay>
            <ButtonFancy
              button="Button"
              style={{
                height: 44,
                width: 100,
                borderRadius: 100
              }}
              button="Sign Out"
            ></ButtonFancy>
          </ButtonOverlay>
        </Button6>
      </Link>
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

const Greeting = styled.span`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  font-size: 50px;
  text-align: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Prompt = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
  text-align: center;
  align-self: center;
`;

const Navigator = styled.div`
  width: 1260px;
  height: 120px;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
`;

const QuoteHistory = styled.div`
  flex-direction: row;
  width: 420px;
  height: 120px;
  border: none;
`;

const Button5 = styled.div`
  flex-direction: row;
  width: 420px;
  height: 120px;
  border: none;
`;

const Button4 = styled.div`
  flex-direction: row;
  width: 420px;
  height: 120px;
  border: none;
`;

const Button6 = styled.div`
  flex-direction: column;
  width: 100px;
  height: 44px;
  border: none;
`;

export default Dashboard;
