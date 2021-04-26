import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    borderWidth: 1 + "px",
    fontSize: 14 + "px",
    lineHeight: 16 + "px",
    paddingLeft: 24 + "px",
    paddingTop: 4 + "px",
    paddingBottom: 4 + "px",
    iconSize: 16,
    iconWidth: 1,
  },
  large: {
    borderWidth: 2 + "px",
    fontSize: 18 + "px",
    lineHeight: 21 + "px",
    paddingLeft: 36 + "px",
    paddingTop: 8 + "px",
    paddingBottom: 7 + "px",
    iconSize: 24,
    iconWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--iconSize": style.iconSize + "px" }}>
        <Icon id={icon} size={style.iconSize} strokeWidth={style.iconWidth} />
      </IconWrapper>
      <Input
        label={label}
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--borderWidth": style.borderWidth,
          "--fontSize": style.fontSize,
          "--lineHeight": style.lineHeight,
          "--paddingLeft": style.paddingLeft,
          "--paddingTop": style.paddingTop,
          "--paddingBottom": style.paddingBottom,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--iconSize);
  height: var(--iconSize);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: inherit;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  width: var(--width);
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  padding-top: var(--paddingTop);
  padding-bottom: var(--paddingBottom);
  padding-left: var(--paddingLeft);
  outline-offset: 2px;
  outline-width: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }

  ${IconWrapper}:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
