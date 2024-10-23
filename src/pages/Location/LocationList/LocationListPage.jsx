import { useSearchParams } from "react-router-dom";
import { useFetchStore, useSearchStore } from "../../../store";
import { useEffect } from "react";
import { locationService } from "../../../api";
import { LocationList, Pagination, Search } from "../../../Components";
import { LocationInfo, LocationListContent } from "./LocationListPage.styled";

export default function LocationPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    fetchData(locationService.getLocationList, currentPage);
  }, [currentPage]);

  const locationList = response.results || [];
  const info = response.info || {};

  return (
    <>
      <Search placeholder="Найти локацию" isFilter={true} />

      {!isSearchOpen && (
        <>
          <LocationInfo>ВСЕГО ЛОКАЦИЙ: {info.count}</LocationInfo>

          <LocationListContent>
            <LocationList locationList={locationList} />
            <Pagination pages={info.pages} currentPage={currentPage} />
          </LocationListContent>
        </>
      )}
    </>
  );
}
