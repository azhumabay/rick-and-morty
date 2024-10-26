import { useSearchParams } from "react-router-dom";
import { useFetchStore, useSearchStore } from "../../store";
import { useEffect } from "react";
import { locationService } from "../../api";
import {
  LocationFilter,
  LocationList,
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
  const { response, fetchData, error } = useFetchStore();
  const { isSearchOpen } = useSearchStore();
  const {
    locationFilter,
    openFilter,
    type,
    locationName,
    setLocationName,
    currentPage,
    setCurrentPage,
  } = useLocationStore();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(searchParams.get("page") || 1);
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    if (type !== null) {
      if (locationName.length > 0) {
        fetchData(
          locationService.getLocationList,
          `${currentPage}&type=${type}&name=${locationName}`
        );
      } else {
        fetchData(
          locationService.getLocationList,
          `${currentPage}&type=${type}`
        );
      }
    } else {
      if (locationName.length > 0) {
        fetchData(
          locationService.getLocationList,
          `${currentPage}&name=${locationName}`
        );
      } else {
        fetchData(locationService.getLocationList, currentPage);
      }
    }
  }, [currentPage, type, locationName, fetchData]);

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
          name={locationName}
          setName={setLocationName}
          setCurrentPage={setCurrentPage}
        />
      )}

      {!locationFilter && !error && (
        <>
          <LocationInfo>ВСЕГО ЛОКАЦИЙ: {info.count}</LocationInfo>

          <LocationListContent $isSearchOpen={isSearchOpen}>
            <LocationList locationList={locationList} />
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
