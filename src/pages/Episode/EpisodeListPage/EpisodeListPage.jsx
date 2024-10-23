import { useEffect } from "react";
import { EpisodeList, Pagination } from "../../../Components";
import Search from "../../../Components/Search";
import { useFetchStore, useSearchStore } from "../../../store";
import { useSearchParams } from "react-router-dom";
import { episodeService } from "../../../api";
import {
  EpisodeListContent,
  EpisodeListPageInfo,
} from "./EpisodeListPage.styled";

export default function EpisodeListPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    fetchData(episodeService.getEpisodeList, currentPage);
  }, [currentPage]);

  const episodeList = response.results || [];
  const info = response.info;

  return (
    <>
      <Search placeholder={"Найти эпизод"} />

      {!isSearchOpen && (
        <>
          <EpisodeListPageInfo>
            Всего Эпизодов: {info?.count}
          </EpisodeListPageInfo>

          <EpisodeListContent>
            <EpisodeList list={episodeList} />
            <Pagination pages={info?.pages} currentPage={currentPage} />
          </EpisodeListContent>
        </>
      )}
    </>
  );
}
