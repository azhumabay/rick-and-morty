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
import { useSearchParams } from "react-router-dom";

export default function CharacterSearch({ name, currentPage, setCurrentPage }) {
  const { response, fetchData, resetResponse, error } = useFetchStore();
  const { isGridView } = useThemeStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    resetResponse();
    let query;

    if (name.length > 0) {
      {
        currentPage == 1
          ? (query = `?name=${name}`)
          : (query = `?page=${currentPage}&name=${name}`);
      }
    }

    if (query) {
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
