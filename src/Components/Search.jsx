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

export default function Search({
  placeholder,
  isFilter = false,
  setName,
  name,
}) {
  const { isSearchOpen, openSearch, closeSearch, openFilter } =
    useSearchStore();

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const closeSearchHandler = () => {
    closeSearch();
    setName("");
  };

  return (
    <>
      {isSearchOpen ? (
        <OpenSearchWrapper>
          <LeftArrow onClick={closeSearchHandler} />
          <SearchInput
            ref={searchInputRef}
            placeholder={placeholder}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <CloseIcon onClick={closeSearchHandler} />
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
