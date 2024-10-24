import { useEffect } from "react";
import { characterService } from "../../../api";
import { useFetchStore, useThemeStore } from "../../../store";
import CharacterList from "../CharacterList";
import {
  CharacterNotFound,
  CharacterSearchContent,
  CharacterSearchStyled,
} from "./CharacterSearch.styled";
import characterNotFound from "@assets/images/characterNotFound.svg";
import Pagination from "../../Pagination";

export default function CharacterSearch({ name, currentPage, setCurrentPage }) {
  const { response, fetchData, resetResponse, error } = useFetchStore();
  const { isGridView } = useThemeStore();

  useEffect(() => {
    resetResponse();
    setCurrentPage(1);

    return () => {
      setCurrentPage(1);
    };
  }, []);

  useEffect(() => {
    let query;

    if (name.length > 0) {
      {
        currentPage == 1
          ? (query = `?name=${name}`)
          : (query = `?page=${currentPage}&name=${name}`);
      }
    }

    if (query) {
      console.log("CharacterSearch");
      fetchData(characterService.getFilteredCharacterList, query);
    }
  }, [currentPage, name]);

  const characterList = response.results || [];
  const pages = response?.info?.pages;

  return (
    <>
      <CharacterSearchStyled>
        <span>Результаты поиска</span>

        {error && (
          <CharacterNotFound>
            <img src={characterNotFound} />
            <p>Персонаж с таким именем не найден</p>
          </CharacterNotFound>
        )}

        {response && !error && (
          <>
            <CharacterSearchContent>
              <CharacterList list={characterList} gridView={isGridView} />
              <Pagination pages={pages} currentPage={currentPage} />
            </CharacterSearchContent>
          </>
        )}
      </CharacterSearchStyled>
    </>
  );
}
