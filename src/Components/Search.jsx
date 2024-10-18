import {
  SearchLogo,
  SearchWrapper,
  SearchInput,
  Divider,
  FilterLogo,
} from "./styles/Search.styled";

import search from "../assets/images/search.svg";
import filter from "../assets/images/filter.svg";

export default function Search({ placeholder }) {
  return (
    <>
      <SearchWrapper>
        <SearchLogo src={search} />
        <SearchInput placeholder={placeholder} />
        <Divider />
        <FilterLogo src={filter} />
      </SearchWrapper>
    </>
  );
}
