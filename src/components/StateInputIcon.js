import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function StateInputIcon(props) {
  return (
    <Container {...props}>
      <FeatherIcon
        name="map"
        style={{
          color: "#616161",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></FeatherIcon>
      <InputStyle placeholder="State" maxLength={2}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(230,230,230,1);
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

const InputStyle = styled.input`
  font-family: Lato;
  color: #000;
  margin-left: 16px;
  font-size: 18px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  font-weight: 400;
  padding: 0px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default StateInputIcon;
