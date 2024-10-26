import { useEffect, useState } from "react";
import { EpisodeList, Pagination, Search } from "../../components";
import { useEpisodeStore, useFetchStore, useSearchStore } from "../../store";
import { useSearchParams } from "react-router-dom";
import { episodeService } from "../../api";
import {
  EpisodeListContent,
  EpisodeListPageInfo,
  EpisodeNotFound,
} from "./styled/EpisodeListPage.styled";
import episodeNotFound from "@assets/images/episodeNotFound.svg";

export default function EpisodeListPage() {
  const { response, fetchData, error } = useFetchStore();
  const { isSearchOpen } = useSearchStore();
  const { searchName, setSearchName } = useEpisodeStore();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(searchParams.get("page") || 1);
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    let queryName = "";
    queryName += searchName.length > 0 ? `&name=${searchName}` : "";
    fetchData(episodeService.getEpisodeList, currentPage + queryName);
  }, [currentPage, searchName]);

  const episodeList = response.results || [];
  const info = response.info;

  return (
    <>
      <Search
        placeholder={"Найти эпизод"}
        name={searchName}
        setName={setSearchName}
        setCurrentPage={setCurrentPage}
      />

      <EpisodeListPageInfo $isSearchOpen={isSearchOpen}>
        {isSearchOpen ? "Результаты поиска" : `Всего Эпизодов: ${info?.count}`}
      </EpisodeListPageInfo>

      {!error ? (
        <EpisodeListContent>
          <EpisodeList list={episodeList} />
          <Pagination pages={info?.pages} currentPage={currentPage} />
        </EpisodeListContent>
      ) : (
        <EpisodeNotFound>
          <img src={episodeNotFound} />
          <p>Эпизода с таким названием нет</p>
        </EpisodeNotFound>
      )}
    </>
  );
}
