import { useEffect, useState } from "react";
import { characterService } from "../../../api";
import { CharacterInfo } from "./CharacterListPage.styled";
import { CharacterList, Pagination, Search } from "../../../Components";
import { useFetchStore, useSearchStore, useThemeStore } from "../../../store";
import { useSearchParams } from "react-router-dom";
import APP_PATH from "../../../const/router";

import gridSwitch from "@assets/images/gridSwitch.svg";
import tableSwitch from "@assets/images/tableSwitch.svg";
import CharacterFilter from "../../../Components/Character/CharacterFilter";

export default function CharactersPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen, isFilterOpen, status, gender } = useSearchStore();
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

    const query =
      fetchParams.length > 0
        ? `?page=${currentPage}&${fetchParams.join("&")}`
        : `?page=${currentPage}`;

    fetchData(characterService.getFilteredCharacterList, query);
  }, [currentPage, status, gender]);

  const characterList = response.results || [];
  const info = response.info || {};

  return (
    <>
      {isFilterOpen ? (
        <CharacterFilter setCurrentPage={setCurrentPage} />
      ) : (
        <Search placeholder="Найти персонажа" isFilter={true} />
      )}

      {!isFilterOpen && !isSearchOpen && (
        <>
          <CharacterInfo>
            <span>ВСЕГО ПЕРСОНАЖЕЙ: {info.count}</span>
            <img
              src={isGridView ? tableSwitch : gridSwitch}
              onClick={toggleGridView}
            />
          </CharacterInfo>

          <CharacterList list={characterList} gridView={isGridView} />
          <Pagination
            path={APP_PATH.CHARACTERS}
            pages={info.pages}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}
