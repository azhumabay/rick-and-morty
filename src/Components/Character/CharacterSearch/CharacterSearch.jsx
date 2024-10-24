import { useEffect, useState } from "react";
import { characterService } from "../../../api";
import { useFetchStore, useThemeStore } from "../../../store";
import CharacterList from "../CharacterList";
import {
  CharacterNotFound,
  CharacterSearchContent,
  CharacterSearchStyled,
} from "./CharacterSearch.styled";
import { useSearchParams } from "react-router-dom";
import characterNotFound from "@assets/images/characterNotFound.svg";
import Pagination from "../../Pagination";

export default function CharacterSearch({ name }) {
  const { response, fetchData, resetResponse, error } = useFetchStore();
  const { isGridView } = useThemeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    resetResponse();
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
