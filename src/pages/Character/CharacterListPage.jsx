import { useEffect } from "react";
import { characterService } from "../../api";
import { CharacterInfo } from "./Styles/CharacterListPage.styled";
import { CharacterList, Pagination, Search } from "../../Components";
import { useFetchStore, useSearchStore, useThemeStore } from "../../store";
import { useSearchParams } from "react-router-dom";
import APP_PATH from "../../const/router";

import gridSwitch from "@assets/images/gridSwitch.svg";
import tableSwitch from "@assets/images/tableSwitch.svg";

export default function CharactersPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();
  const { isGridView, toggleGridView } = useThemeStore();

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    fetchData(characterService.getCharacterList, currentPage);
  }, [currentPage]);

  const characterList = response.results || [];
  const info = response.info || {};

  return (
    <>
      <Search placeholder="Найти персонажа" />

      {!isSearchOpen && (
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
