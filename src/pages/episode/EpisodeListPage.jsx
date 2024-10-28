import { useEffect, useState } from "react";
import { EpisodeList, Pagination, Search } from "../../components";
import { useEpisodeStore, useSearchStore } from "../../store";
import { useSearchParams } from "react-router-dom";
import {
  EpisodeListContent,
  EpisodeListPageInfo,
  EpisodeNotFound,
} from "./styled/EpisodeListPage.styled";
import episodeNotFound from "@assets/images/episodeNotFound.svg";

export default function EpisodeListPage() {
  const { isSearchOpen } = useSearchStore();
  const { searchName, setSearchName, fetchList, listData, error } =
    useEpisodeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(searchParams.get("page") || 1);
  }, [searchParams]);

  useEffect(() => {
    fetchList(`${currentPage}${searchName ? `&name=${searchName}` : ""}`);
  }, [currentPage, searchName]);

  const episodeList = listData.results || [];
  const info = listData.info;

  return (
    <>
      <Search
        placeholder={"Найти эпизод"}
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
