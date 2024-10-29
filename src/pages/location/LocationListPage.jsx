import { useSearchParams } from "react-router-dom";
import { useSearchStore } from "../../store";
import { useEffect, useState } from "react";

import {
  LocationFilter,
  LocationList,
  LocationListSkeleton,
  Pagination,
  Search,
} from "../../components";
import {
  LocationInfo,
  LocationListContent,
  LocationNotFound,
} from "./styled/LocationListPage.styled";
import useLocationStore from "../../store/useLocationStore";
import locationNotFound from "@assets/images/locationNotFound.svg";

export default function LocationPage() {
  const { isSearchOpen, isFilterOpen, openFilter } = useSearchStore();
  const {
    type,
    searchName,
    setSearchName,
    listData,
    fetchList,
    loading,
    error,
  } = useLocationStore();

  const [searchParams] = useSearchParams();
  const initalPage = searchParams.get("page") || 1;
  const [currentPage, setCurrentPage] = useState(initalPage);

  useEffect(() => {
    setCurrentPage(searchParams.get("page") || initalPage);
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    if (type !== null) {
      if (searchName.length > 0) {
        fetchList(`${currentPage}&type=${type}&name=${searchName}`);
      } else {
        fetchList(`${currentPage}&type=${type}`);
      }
    } else {
      if (searchName.length > 0) {
        fetchList(`${currentPage}&name=${searchName}`);
      } else {
        fetchList(currentPage);
      }
    }
  }, [currentPage, type, searchName, fetchList]);

  const locationList = listData.results || [];
  const info = listData.info || {};

  return (
    <>
      {isFilterOpen ? (
        <LocationFilter />
      ) : (
        <Search
          placeholder="Найти локацию"
          isFilter={true}
          openFilter={openFilter}
          setName={setSearchName}
          setCurrentPage={setCurrentPage}
        />
      )}

      {!isFilterOpen && !error && (
        <>
          <LocationInfo>ВСЕГО ЛОКАЦИЙ: {info.count}</LocationInfo>

          <LocationListContent $isSearchOpen={isSearchOpen}>
            {loading ? (
              <LocationListSkeleton cards={4} />
            ) : (
              <LocationList locationList={locationList} />
            )}
            <Pagination pages={info.pages} currentPage={currentPage} />
          </LocationListContent>
        </>
      )}

      {error && (
        <LocationNotFound>
          <img src={locationNotFound} />
          <p>Локации с таким названием не найдено</p>
        </LocationNotFound>
      )}
    </>
  );
}
