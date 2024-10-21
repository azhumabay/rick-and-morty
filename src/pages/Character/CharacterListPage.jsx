import { useEffect } from "react";
import { characterService } from "../../api";
import { CharacterInfo } from "./Styles/CharacterListPage.styled";
import { ToggleViewIcon } from "../../Components/Icons";
import { CharacterList, Pagination, Search } from "../../Components";
import { useFetchStore, useSearchStore } from "../../store";
import { useSearchParams } from "react-router-dom";

export default function CharactersPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();

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
            <span>ВСЕГО ПЕРСОНАЖЕЙ: {info.count}</span> <ToggleViewIcon />
          </CharacterInfo>

          <CharacterList list={characterList} />
          <Pagination pages={42} currentPage={currentPage} />
        </>
      )}
    </>
  );
}
