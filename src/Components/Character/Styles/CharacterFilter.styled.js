import styled from "styled-components";

const CharacterFilterHeader = styled.div`
  height: 52px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px 16px;

  display: flex;
  align-items: center;
  gap: 20px;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }
`;

const CharacterFilterStyled = styled.div`
  padding: 0 16px;
  padding-top: 87px;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
`;

const CharacterFilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const CharacterFilterItem = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    input {
      width: 18px;
      height: 18px;
      position: relative;
      cursor: pointer;
      appearance: none;
      background-color: ${({ theme }) => theme.colors.background};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 4px;

      &:checked {
        background-color: ${({ theme }) => theme.colors.active};
        border: none;
        display: flex;
        justify-content: center;
      }

      &:checked::after {
        content: "";
        margin-top: 2.5px;
        width: 4px;
        height: 8px;
        border: solid ${({ theme }) => theme.colors.background};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    label {
      color: ${({ theme }) => theme.colors.text};
      line-height: 24px;
      letter-spacing: 0.15px;
    }
  }
`;

const CharacterFilterDivider = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export {
  CharacterFilterHeader,
  CharacterFilterStyled,
  CharacterFilterItem,
  CharacterFilterContent,
  CharacterFilterDivider,
};
