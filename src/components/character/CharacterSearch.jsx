import { useEffect, useState } from "react";
import { characterService } from "../../api";
import { useCharacterStore, useFetchStore, useThemeStore } from "../../store";
import CharacterList from "./CharacterList";
import {
  CharacterNotFound,
  CharacterSearchContent,
  CharacterSearchStyled,
} from "./styled/CharacterSearch.styled";
import characterNotFound from "@assets/images/characterNotFound.svg";
import Pagination from "../pagination/Pagination";
import { useSearchParams } from "react-router-dom";

export default function CharacterSearch() {
  const { response, fetchData, error } = useFetchStore();
  const { gender, status, searchName } = useCharacterStore();
  const [currentPage, setCurrentPage] = useState(1);
  const { isGridView } = useThemeStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(searchParams.get("page") || 1);
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    let query = `${currentPage}`;

    query += gender.length > 0 ? `&gender=${gender}` : "";
    query += status.length > 0 ? `&status=${status}` : "";
    query += searchName.length > 0 ? `&name=${searchName}` : "";

    fetchData(characterService.getCharacterList, query);
  }, [currentPage, searchName, status, gender]);

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
