import styled from "styled-components";

const SearchWrapper = styled.div`
  background-color: rgba(21, 42, 58, 1);
  width: 100%;
  height: 48px;
  padding: 12px 15px;
  border-radius: 100px;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 54px;
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

  color: rgba(91, 105, 117, 1);
  font-size: 16px;
  flex-grow: 1;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

const FilterLogo = styled.img`
  width: 16px;
  height: 16px;
`;

export { SearchWrapper, SearchLogo, SearchInput, Divider, FilterLogo };
