import { useEffect } from "react";
import { EpisodeList, Pagination } from "../../../Components";
import Search from "../../../Components/Search";
import { useFetchStore, useSearchStore } from "../../../store";
import { useSearchParams } from "react-router-dom";
import { episodeService } from "../../../api";
import APP_PATH from "../../../const/router";

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
          <EpisodeList list={episodeList} />

          <Pagination
            path={APP_PATH.EPISODES}
            pages={info?.pages}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}
