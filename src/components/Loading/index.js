import React from "react";
import { SpinnerDotted } from "spinners-react";
import { LoadingContainer } from "./LoadingStyles";

const Loading = () => {
  return (
    <LoadingContainer>
      <SpinnerDotted size="100" color="#14213d" />
    </LoadingContainer>
  );
};

export default Loading;
