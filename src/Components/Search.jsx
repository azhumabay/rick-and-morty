import {
  SearchLogo,
  CloseSearchWrapper,
  SearchInput,
  Divider,
  FilterLogo,
  OpenSearchWrapper,
} from "./styles/Search.styled";

import search from "../assets/images/search.svg";
import filter from "../assets/images/filter.svg";
import useSearchStore from "../store/useSearchStore";
import { CloseIcon, LeftArrow } from "./Icons";
import { useEffect, useRef } from "react";

export default function Search({ placeholder, isFilter = false }) {
  const { isSearchOpen, openSearch, closeSearch, openFilter } =
    useSearchStore();

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      {isSearchOpen ? (
        <OpenSearchWrapper>
          <LeftArrow onClick={closeSearch} />
          <SearchInput ref={searchInputRef} placeholder={placeholder} />
          <CloseIcon onClick={closeSearch} />
        </OpenSearchWrapper>
      ) : (
        <CloseSearchWrapper>
          <SearchLogo src={search} />
          <SearchInput placeholder={placeholder} onClick={openSearch} />
          {isFilter && (
            <>
              <Divider />
              <FilterLogo src={filter} onClick={openFilter} />
            </>
          )}
        </CloseSearchWrapper>
      )}
    </>
  );
}
