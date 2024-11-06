import styled, { css } from "styled-components";

const SettingsHeader = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
    font-weight: 500;
  }
`;

const ThemeWrapper = styled.div`
  margin-top: 32px;

  span {
    color: rgba(91, 105, 117, 1);
    font-size: 10px;
  }
`;

const Theme = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

const ThemeText = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  flex-basis: calc(83%);

  span {
    color: rgba(110, 121, 140, 0.6);
    font-size: 14px;
  }
`;

// modal

const SettingsModalStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.47);
  padding: 0 16px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SettingsModalWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  max-width: 430px;
  border-radius: 10px;
  padding: 20px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-weight: 500;
    font-size: 20px;
  }
`;

const SettingsModalRadio = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(34, 162, 189, 1)" : "rgba(91, 105, 117, 1)"};
  border-radius: 50%;
  position: relative;

  ${({ $isDarkMode }) =>
    $isDarkMode &&
    css`
      &::after {
        content: "";
        display: block;
        background-color: rgba(34, 162, 189, 1);
        position: absolute;
        border-radius: 50%;

        width: 63%;
        height: 63%;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;

const SettingsModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const SettingsModalClose = styled.div`
  text-align: right;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.5px;
`;

export {
  SettingsHeader,
  ThemeWrapper,
  Theme,
  ThemeText,
  SettingsModalStyled,
  SettingsModalWrapper,
  SettingsModalRadio,
  SettingsModalItem,
  SettingsModalClose,
};
