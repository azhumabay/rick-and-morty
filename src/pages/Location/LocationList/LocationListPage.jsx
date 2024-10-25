import { useSearchParams } from "react-router-dom";
import { useFetchStore, useSearchStore } from "../../../store";
import { useEffect } from "react";
import { locationService } from "../../../api";
import {
  LocationFilter,
  LocationList,
  Pagination,
  Search,
} from "../../../Components";
import { LocationInfo, LocationListContent } from "./LocationListPage.styled";
import useLocationStore from "../../../store/useLocationStore";

export default function LocationPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();
  const { locationFilter, openFilter, type } = useLocationStore();

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    if (type !== null) {
      fetchData(locationService.getLocationList, `${currentPage}&type=${type}`);
    } else {
      fetchData(locationService.getLocationList, currentPage);
    }
  }, [currentPage, type]);

  const locationList = response.results || [];
  const info = response.info || {};

  return (
    <>
      {locationFilter ? (
        <LocationFilter />
      ) : (
        <Search
          placeholder="Найти локацию"
          isFilter={true}
          openFilter={openFilter}
        />
      )}

      {!isSearchOpen && !locationFilter && (
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
