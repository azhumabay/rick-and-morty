import styled from "styled-components";

const CloseSearchWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 48px;
  padding: 12px 15px;
  border-radius: 100px;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 10px;
  margin-bottom: 20px;
`;

const SearchLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchInput = styled.input`
  background-color: inherit;
  border: none;
  outline: none;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  flex-grow: 1;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.divider};
`;

const FilterLogo = styled.img`
  width: 16px;
  height: 16px;
`;

// Open

const OpenSearchWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  width: 100%;
  height: 48px;
  top: 0px;
  left: 0;
  gap: 20px;

  padding: 12px 16px;

  display: flex;
  align-items: center;
`;

export {
  CloseSearchWrapper,
  SearchLogo,
  SearchInput,
  Divider,
  FilterLogo,
  OpenSearchWrapper,
};
