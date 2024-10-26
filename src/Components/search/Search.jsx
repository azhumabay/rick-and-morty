import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  SearchLogo,
  CloseSearchWrapper,
  SearchInput,
  Divider,
  FilterLogo,
  OpenSearchWrapper,
} from "./Search.styled";

import search from "@assets/images/search.svg";
import filter from "@assets/images/filter.svg";

import { CloseIcon, LeftArrow } from "../Icons";
import { useEffect, useRef } from "react";

import { useSearchStore } from "../../store";

export default function Search({
  placeholder,
  isFilter = false,
  setName,
  name,
  openFilter,
  setCurrentPage,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSearchOpen, openSearch, closeSearch } = useSearchStore();

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const closeSearchHandler = () => {
    closeSearch();
    setName("");
    navigate(location.pathname);
  };

  const openSearchHanlder = () => {
    openSearch();
    setSearchParams({});
  };

  const openFilterHandler = () => {
    openFilter();
    setSearchParams({});
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
              setCurrentPage(1);
              setSearchParams({});
            }}
          />
          <CloseIcon onClick={closeSearchHandler} />
        </OpenSearchWrapper>
      ) : (
        <CloseSearchWrapper>
          <SearchLogo src={search} />
          <SearchInput placeholder={placeholder} onClick={openSearchHanlder} />
          {isFilter && (
            <>
              <Divider />
              <FilterLogo src={filter} onClick={openFilterHandler} />
            </>
          )}
        </CloseSearchWrapper>
      )}
    </>
  );
}
