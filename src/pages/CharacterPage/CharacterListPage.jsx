import { useEffect } from "react";
import { characterService } from "../../api";
import { CharacterInfo } from "./Styles/CharacterListPage.styled";
import { ToggleViewIcon } from "../../Components/Icons";
import { CharacterList, Search } from "../../Components";
import { useFetchStore, useSearchStore } from "../../store";

export default function CharactersPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();

  useEffect(() => {
    fetchData(characterService.getCharacterList);
  }, []);

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
        </>
      )}
    </>
  );
}
