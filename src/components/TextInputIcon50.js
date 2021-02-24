import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function TextInputIcon50(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="calendar"
        style={{
          color: "#616161",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></MaterialCommunityIconsIcon>
      <InputStyle placeholder="Label"></InputStyle>
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
  padding: 0px;
  font-weight: 400;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default TextInputIcon50;
