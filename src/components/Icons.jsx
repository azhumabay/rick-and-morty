import styled from "styled-components";

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.secondary};
  stroke: ${({ theme }) => theme.colors.secondary};

  .active & {
    fill: ${(props) => props.theme.colors.active};
    stroke: ${(props) => props.theme.colors.active};
  }
`;

const StyledSvg = styled.svg`
  stroke: ${(props) => props.theme.colors.text};
`;

const CharactersIcon = () => (
  <IconSvg viewBox="0 0 19 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.46591 0C4.45278 0 0.375 4.03793 0.375 8.99984L0.426516 16.9997C0.673991 18.6907 2.13359 19.9996 3.91035 19.9996C5.09621 19.9996 6.0053 19.5826 6.60934 18.8257C6.98499 19.199 7.43162 19.4951 7.92346 19.6966C8.4153 19.8982 8.9426 20.0013 9.47492 20C10.0072 19.9987 10.534 19.893 11.0248 19.689C11.5157 19.4851 11.9608 19.1869 12.3346 18.8117C12.9417 19.5736 13.8538 19.9996 15.0215 19.9996C16.971 19.9996 18.5568 18.4297 18.5568 16.4997V8.99984C18.5568 4.03793 14.479 0 9.46591 0ZM6.29839 10.9661C7.52569 10.9661 8.52062 9.97122 8.52062 8.74392C8.52062 7.51662 7.52569 6.5217 6.29839 6.5217C5.07109 6.5217 4.07617 7.51662 4.07617 8.74392C4.07617 9.97122 5.07109 10.9661 6.29839 10.9661ZM15.1871 8.74392C15.1871 9.97122 14.1922 10.9661 12.9649 10.9661C11.7376 10.9661 10.7427 9.97122 10.7427 8.74392C10.7427 7.51662 11.7376 6.5217 12.9649 6.5217C14.1922 6.5217 15.1871 7.51662 15.1871 8.74392Z"
    />
  </IconSvg>
);

const LocationIcon = () => (
  <IconSvg viewBox="0 0 26 24">
    <path
      d="M20.1708 13.0302C22.9916 15.2938 24.5604 17.2948 24.0189 18.2315C23.1636 19.7097 17.3691 17.9689 11.0768 14.3431C4.78447 10.7173 0.376191 6.57978 1.23101 5.10205C1.76576 4.17823 4.2296 4.51173 7.53868 5.77719"
      strokeWidth="2"
      strokeMiterlimit="10"
      fill="none"
    />
    <path
      d="M12.6252 19.3331C16.8593 19.3331 20.2918 15.9007 20.2918 11.6666C20.2918 7.43244 16.8593 4 12.6252 4C8.39107 4 4.95863 7.43244 4.95863 11.6666C4.95863 15.9007 8.39107 19.3331 12.6252 19.3331Z"
      strokeWidth="2"
      strokeMiterlimit="10"
      fill="none"
    />
  </IconSvg>
);

const EpisodesIcon = () => (
  <IconSvg viewBox="0 0 25 24">
    <path
      d="M20.075 7.5H5.675C4.68089 7.5 3.875 8.30589 3.875 9.3V19.2C3.875 20.1941 4.68089 21 5.675 21H20.075C21.0691 21 21.875 20.1941 21.875 19.2V9.3C21.875 8.30589 21.0691 7.5 20.075 7.5Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M17.3755 3L12.8755 7.5L8.3755 3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconSvg>
);

const SettingsIcon = () => (
  <IconSvg viewBox="0 0 25 24">
    <path
      d="M14.5342 10.0907C15.5886 11.1452 15.5886 12.8547 14.5342 13.9091C13.4798 14.9635 11.7702 14.9635 10.7158 13.9091C9.6614 12.8547 9.6614 11.1452 10.7158 10.0907C11.7702 9.03632 13.4798 9.03632 14.5342 10.0907"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M5.87499 12C5.87499 12.297 5.90199 12.594 5.93799 12.882L4.34999 14.124C3.99799 14.4 3.90199 14.893 4.12599 15.28L5.53799 17.723C5.76099 18.11 6.23499 18.273 6.64999 18.107L8.07199 17.536C8.35299 17.423 8.66599 17.468 8.91799 17.635C9.13799 17.781 9.36599 17.915 9.60199 18.035C9.87199 18.172 10.068 18.417 10.111 18.717L10.328 20.23C10.391 20.672 10.77 21 11.216 21H14.033C14.479 21 14.858 20.672 14.921 20.23L15.138 18.718C15.181 18.418 15.379 18.171 15.65 18.035C15.885 17.917 16.112 17.784 16.331 17.639C16.585 17.471 16.899 17.423 17.181 17.537L18.6 18.107C19.014 18.273 19.488 18.11 19.712 17.723L21.124 15.28C21.348 14.893 21.252 14.399 20.9 14.124L19.312 12.882C19.348 12.594 19.375 12.297 19.375 12C19.375 11.703 19.348 11.406 19.312 11.118L20.9 9.876C21.252 9.6 21.348 9.107 21.124 8.72L19.712 6.277C19.489 5.89 19.015 5.727 18.6 5.893L17.181 6.463C16.899 6.576 16.585 6.529 16.331 6.361C16.112 6.216 15.885 6.083 15.65 5.965C15.379 5.829 15.181 5.582 15.138 5.282L14.922 3.77C14.859 3.328 14.48 3 14.034 3H11.217C10.771 3 10.392 3.328 10.329 3.77L10.111 5.284C10.068 5.583 9.87099 5.829 9.60199 5.966C9.36599 6.086 9.13799 6.221 8.91799 6.366C8.66499 6.532 8.35199 6.577 8.07099 6.464L6.64999 5.893C6.23499 5.727 5.76099 5.89 5.53799 6.277L4.12599 8.72C3.90199 9.107 3.99799 9.601 4.34999 9.876L5.93799 11.118C5.90199 11.406 5.87499 11.703 5.87499 12V12Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconSvg>
);

const ThemeIcon = ({ width = 27, height = 27 }) => (
  <StyledSvg width={width} height={height} viewBox="0 0 36 36" fill="none">
    <path
      d="M17.9984 9.5625C17.7704 9.5625 17.5859 9.747 17.5889 9.975C17.5889 10.203 17.7734 10.3875 18.0014 10.3875C18.2294 10.3875 18.4139 10.203 18.4139 9.975C18.4109 9.747 18.2279 9.5625 17.9984 9.5625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.386 17.9985C10.386 17.7705 10.2015 17.586 9.975 17.589C9.747 17.589 9.5625 17.7735 9.5625 18.0015C9.5625 18.2295 9.747 18.414 9.975 18.414C10.203 18.414 10.386 18.228 10.386 17.9985"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.9655 12.033C23.805 11.8725 23.544 11.8725 23.385 12.0345C23.2245 12.195 23.2245 12.456 23.385 12.6165C23.5455 12.777 23.8065 12.777 23.967 12.6165C24.1275 12.4545 24.1275 12.195 23.9655 12.033Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6149 23.3835C12.4544 23.223 12.1934 23.223 12.0344 23.385C11.8739 23.5455 11.8739 23.8065 12.0344 23.967C12.1949 24.1275 12.4559 24.1275 12.6164 23.967C12.7769 23.8065 12.7769 23.5455 12.6149 23.3835Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6165 12.6151C12.777 12.4546 12.777 12.1936 12.615 12.0346C12.4545 11.8741 12.1935 11.8741 12.033 12.0346C11.8725 12.1951 11.8725 12.4561 12.033 12.6166C12.1935 12.7771 12.4545 12.7771 12.6165 12.6151Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.9998 31.5001C10.4173 31.5001 4.29431 25.2481 4.50581 17.6176C4.70081 10.5736 10.5733 4.70105 17.6173 4.50605C25.2478 4.29455 31.4998 10.4176 31.4998 18.0001V19.5001C31.4998 21.1576 30.1573 22.5001 28.4998 22.5001H25.4053C23.4118 22.5001 21.9733 24.4081 22.5208 26.3236L22.9063 27.6751C23.4553 29.5921 22.0153 31.5001 20.0233 31.5001H17.9998Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvg>
);

const RightArrow = ({ width = 6, height = 10 }) => (
  <StyledSvg
    width={width}
    height={height}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 9L5 5L1 1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvg>
);

const LeftArrow = ({ onClick }) => (
  <StyledSvg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M1 6H15"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 1L1 6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 11L1 6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvg>
);

const CloseIcon = ({ onClick }) => (
  <StyledSvg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
  >
    <path
      d="M8 8L16 16"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L8 16"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSvg>
);

export {
  CharactersIcon,
  LocationIcon,
  EpisodesIcon,
  SettingsIcon,
  ThemeIcon,
  RightArrow,
  LeftArrow,
  CloseIcon,
};
