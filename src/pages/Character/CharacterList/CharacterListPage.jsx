import { useEffect, useState } from "react";
import { characterService } from "../../../api";
import {
  CharacterInfo,
  CharacterListContent,
} from "./CharacterListPage.styled";
import {
  CharacterList,
  CharacterSearch,
  Pagination,
  Search,
} from "../../../Components";
import {
  useCharacterStore,
  useFetchStore,
  useSearchStore,
  useThemeStore,
} from "../../../store";
import { useSearchParams } from "react-router-dom";

import gridSwitch from "@assets/images/gridSwitch.svg";
import tableSwitch from "@assets/images/tableSwitch.svg";
import CharacterFilter from "../../../Components/Character/CharacterFilter";

export default function CharactersPage() {
  const { response, fetchData } = useFetchStore();
  const {
    searchName,
    setSearchName,
    openCharacterFilter,
    isCharacterFilterOpen,
  } = useCharacterStore();
  const { isSearchOpen } = useSearchStore();
  const { status, gender } = useCharacterStore();
  const { isGridView, toggleGridView } = useThemeStore();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    const fetchParams = [];

    if (status !== "") {
      fetchParams.push(`status=${status}`);
    }

    if (gender !== "") {
      fetchParams.push(`gender=${gender}`);
    }

    let query;

    if (!isSearchOpen) {
      query =
        fetchParams.length > 0
          ? `?page=${currentPage}&${fetchParams.join("&")}`
          : `?page=${currentPage}`;
    }

    if (!isSearchOpen) {
      fetchData(characterService.getFilteredCharacterList, query);
    }
  }, [currentPage, status, gender, searchName, isSearchOpen]);

  const characterList = response.results || [];
  const info = response.info || {};

  return (
    <>
      {isCharacterFilterOpen ? (
        <CharacterFilter setCurrentPage={setCurrentPage} />
      ) : (
        <>
          <Search
            placeholder="Найти персонажа"
            isFilter={true}
            setName={setSearchName}
            name={searchName}
            openFilter={openCharacterFilter}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {!isCharacterFilterOpen && !isSearchOpen && (
        <>
          <CharacterInfo>
            <span>ВСЕГО ПЕРСОНАЖЕЙ: {info.count}</span>
            <img
              src={isGridView ? tableSwitch : gridSwitch}
              onClick={toggleGridView}
            />
          </CharacterInfo>

          <CharacterListContent>
            <CharacterList list={characterList} gridView={isGridView} />
            <Pagination pages={info.pages} currentPage={currentPage} />
          </CharacterListContent>
        </>
      )}

      {isSearchOpen && <CharacterSearch />}
    </>
  );
}
