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
import { useEffect, useRef, useState } from "react";

import { useSearchStore } from "../../store";
import useDebounce from "../../use/useDebounce";

export default function Search({
  placeholder,
  isFilter = false,
  setName,
  openFilter,
  setCurrentPage,
}) {
  const { isSearchOpen, openSearch, closeSearch } = useSearchStore();
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 800);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      if (searchInputRef.current) searchInputRef.current.focus();
    } else {
      setInput("");
    }

    return () => {
      setInput("");
    };
  }, [isSearchOpen]);

  useEffect(() => {
    setName(debouncedInput);
    setCurrentPage(1);
    setSearchParams({});
  }, [debouncedInput]);

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

  const handleInputChange = (e) => {
    setInput(e.target.value);
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
