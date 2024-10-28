import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  SearchLogo,
  CloseSearchWrapper,
  SearchInput,
  Divider,
  FilterLogo,
  OpenSearchWrapper,
} from "./Search.styled";
import { debounce } from "lodash";
import search from "@assets/images/search.svg";
import filter from "@assets/images/filter.svg";

import { CloseIcon, LeftArrow } from "../Icons";
import { useCallback, useEffect, useRef, useState } from "react";

import { useSearchStore } from "../../store";

export default function Search({
  placeholder,
  isFilter = false,
  setName,
  openFilter,
  setCurrentPage,
}) {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSearchOpen, openSearch, closeSearch } = useSearchStore();

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      if (searchInputRef.current) searchInputRef.current.focus();
    } else {
      debounceOnChange.cancel();
      setInput("");
    }

    return () => {
      debounceOnChange.cancel();
      setInput("");
    };
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

  const debounceOnChange = useCallback(
    debounce((value) => {
      setName(value);
      setCurrentPage(1);
      setSearchParams({});
    }, 800),
    []
  );

  const handleInputChange = (e) => {
    setInput(e.target.value);
    debounceOnChange(e.target.value);
  };

  return (
    <>
      {isSearchOpen ? (
        <OpenSearchWrapper>
          <LeftArrow onClick={closeSearchHandler} />
          <SearchInput
            ref={searchInputRef}
            placeholder={placeholder}
            value={input}
            onChange={handleInputChange}
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
