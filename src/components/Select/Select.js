import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        <p>{displayedValue}</p>
        <Icon id="chevron-down" strokeWidth={2} size={24} />
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 16px;

  p {
    padding-right: 24px;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
