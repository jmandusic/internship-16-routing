import styled from "styled-components";

export const ListContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin-bottom: 100px;
  padding-bottom: 50px;
  width: 90vw;
  background-color: #282d33;
  border-radius: 20px;
  box-shadow: 25px 25px 25px grey;

  h3 {
    color: #62dafb;
    text-align: center;
    font-size: 25px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  a {
    margin-top: 20px;
    height: max-content;
    text-decoration: none;
    color: white;
    font-size: 20;
  }

  a:hover {
    p {
      opacity: 0.7;
    }
  }

  Button {
    padding: 0 20px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;

    h3 {
      font-size: 60px;
    }

    div {
      margin-bottom: -80px;
    }

    Button {
      padding: 0 40px;
      height: 60px;
    }

    a {
      margin-top: 70px;
      font-size: 30px;
    }
  }
`;

export const DetailsContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin-bottom: 100px;
  padding-bottom: 50px;
  width: 90vw;
  background-color: #282d33;
  border-radius: 20px;
  box-shadow: 25px 25px 25px grey;
  text-align: center;

  div {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
  }

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;

    div {
      width: 50%;
    }
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    width: 100%;
    color: #62dafb;
  }

  p {
    margin-top: -15px;
    color: white;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;

    h4 {
      font-size: 45px;
    }

    p {
      font-size: 35px;
    }
  }
`;

export const ConfirmationModalContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20vh;
  width: 90vw;
  height: 60vh;
  background-color: #282d33;
  border-radius: 20px;
  box-shadow: 25px 25px 25px grey;

  h1 {
    color: #62dafb;
    text-align: center;
    font-size: 35px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;

    h1 {
      font-size: 60px;
    }
  }
`;

export const Form = styled.form`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20vh;
  padding-bottom: 40px;
  width: 90vw;
  height: 60vh;
  background-color: #282d33;
  border-radius: 20px;
  box-shadow: 25px 25px 25px grey;

  label {
    color: #62dafb;
  }

  input {
    outline: none;
    padding-left: 15px;
    height: 30px;
    border: none;
    border-radius: 7px;
  }

  span {
    position: absolute;
    bottom: 20px;
    color: red;
  }

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;
    padding-bottom: 70px;

    label {
      font-size: 40px;
    }

    input {
      height: 40px;
      width: 500px;
    }

    span {
      bottom: 35px;
      font-size: 40px;
    }
  }
`;
