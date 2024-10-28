import { useEffect, useState } from "react";
import {
  CharacterInfo,
  CharacterListContent,
  CharacterNotFound,
} from "./styled/CharacterListPage.styled";
import { CharacterList, Pagination, Search } from "../../components";
import { useCharacterStore, useSearchStore, useThemeStore } from "../../store";
import { useSearchParams } from "react-router-dom";

import gridSwitch from "@assets/images/gridSwitch.svg";
import tableSwitch from "@assets/images/tableSwitch.svg";
import characterNotFound from "@assets/images/characterNotFound.svg";
import CharacterFilter from "../../components/character/CharacterFilter";

export default function CharactersPage() {
  const {
    listData,
    fetchList,
    searchName,
    setSearchName,
    status,
    gender,
    error,
  } = useCharacterStore();
  const { isSearchOpen, openFilter, isFilterOpen } = useSearchStore();
  const { isGridView, toggleGridView } = useThemeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    const fetchFilter = [];

    if (status) fetchFilter.push(`status=${status}`);
    if (gender) fetchFilter.push(`gender=${gender}`);
    if (searchName) fetchFilter.push(`name=${searchName}`);

    const query = fetchFilter.length > 0 ? `&${fetchFilter.join("&")}` : "";
    fetchList(`${currentPage}${query}`);
  }, [currentPage, status, gender, fetchList, searchName]);

  const characterList = listData.results || [];
  const info = listData.info || {};

  return (
    <>
      {isFilterOpen ? (
        <CharacterFilter setCurrentPage={setCurrentPage} />
      ) : (
        <>
          <Search
            placeholder="Найти персонажа"
            isFilter={true}
            setName={setSearchName}
            name={searchName}
            openFilter={openFilter}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {!isFilterOpen && (
        <>
          <CharacterInfo $isSearchOpen={isSearchOpen}>
            <span>
              {!isSearchOpen
                ? `ВСЕГО ПЕРСОНАЖЕЙ: ${info.count}`
                : "Результаты поиска"}
            </span>
            <img
              src={isGridView ? tableSwitch : gridSwitch}
              onClick={toggleGridView}
            />
          </CharacterInfo>

          {!error ? (
            <CharacterListContent>
              <CharacterList list={characterList} gridView={isGridView} />
              <Pagination pages={info.pages} currentPage={currentPage} />
            </CharacterListContent>
          ) : (
            <CharacterNotFound>
              <img src={characterNotFound} />
              <p>Персонаж с таким именем не найден</p>
            </CharacterNotFound>
          )}
        </>
      )}
    </>
  );
}