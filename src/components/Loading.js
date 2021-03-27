import { Dot, Dot2, Dot3, LoadingContainer } from "../index.styled";

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>Loading</h1>
      <div>
        <Dot></Dot>
        <Dot2></Dot2>
        <Dot3></Dot3>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
