/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--borderRadius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar
        size={size}
        style={{
          "--percent": value + "%",
          "--borderRightRadius":
            size === "large" && value === 100
              ? 4 + "px"
              : size === "large" && value === 99.8
              ? 2 + "px"
              : 0,
        }}
      />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  width: var(--percent);
  background: ${COLORS.primary};

  border-top-right-radius: var(--borderRightRadius);
  border-bottom-right-radius: var(--borderRightRadius);

  ${(p) =>
    p.size === "large" &&
    `border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;`};
`;

export default ProgressBar;
