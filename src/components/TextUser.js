import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function TextUser(props) {
  return (
    <Container {...props}>
      <FontAwesomeIcon
        name="user"
        style={{
          color: "#616161",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></FontAwesomeIcon>
      <InputStyle placeholder={props.inputStyle || "Label"}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(230, 230, 230,1);
`;

const InputStyle = styled.input`
  font-family: Lato;
  color: #000;
  margin-left: 16px;
  font-size: 18px;
  flex: 1 1 0%;
  line-height: 16px;
  font-weight: 400;
  height: 43px;
  padding: 0px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default TextUser;
