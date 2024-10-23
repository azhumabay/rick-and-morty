import { useEffect, useState } from "react";
import { characterService } from "../../../api";
import { useFetchStore, useThemeStore } from "../../../store";
import CharacterList from "../CharacterList";
import {
  CharacterNotFound,
  CharacterSearchStyled,
} from "./CharacterSearch.styled";
import { useSearchParams } from "react-router-dom";
import characterNotFound from "@assets/images/characterNotFound.svg";

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
      query = `?name=${name}`;
    }

    if (query) {
      fetchData(characterService.getFilteredCharacterList, query);
    }
  }, [currentPage, name]);

  const characterList = response.results || [];

  return (
    <>
      <CharacterSearchStyled>
        <span>Результаты поиска</span>

        <CharacterList list={characterList} gridView={isGridView} />
        {error && (
          <CharacterNotFound>
            <img src={characterNotFound} />
            <p>Персонаж с таким именем не найден</p>
          </CharacterNotFound>
        )}
      </CharacterSearchStyled>
    </>
  );
}
