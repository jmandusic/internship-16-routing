import styled from "styled-components";

export const NotFoundContainer = styled.div`
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

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;

    h1 {
      font-size: 60px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  background-color: #62dafb;
  color: #282d33;
  font-weight: bold;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 40px;
    font-size: 30px;
  }
`;

export const MainScreenContainer = styled.div`
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

export const LoadingContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  width: 90vw;
  height: 60vh;
  background-color: #282d33;
  border-radius: 20px;
  box-shadow: 25px 25px 25px grey;

  &::after {
    content: "";
    position: absolute;
    right: 20px;
    top: 20px;
    width: 35px;
    height: 35px;
    border: 3px solid rgba(98, 218, 251, 0.5);
    border-top-color: #62dafb;
    border-radius: 50%;
    animation: 1s spin infinite ease-in-out;
  }

  h1 {
    margin-top: -30px;
    color: #62dafb;
    text-align: center;
    font-size: 35px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1296px;
    box-shadow: 40px 40px 30px grey;

    h1 {
      font-size: 60px;
    }
  }
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #62dafb;
  animation: 1.5s pulse infinite ease-in-out;
  animation-delay: -0.3s;

  @keyframes pulse {
    from {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    to {
      transform: scale(0);
    }
  }
`;

export const Dot2 = styled.div`
  margin: auto 10px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #62dafb;
  animation: 1.5s pulse infinite ease-in-out;
  animation-delay: -0.15s;

  @keyframes pulse {
    from {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    to {
      transform: scale(0);
    }
  }
`;

export const Dot3 = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #62dafb;
  animation: 1.5s pulse infinite ease-in-out;

  @keyframes pulse {
    from {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    to {
      transform: scale(0);
    }
  }
`;
