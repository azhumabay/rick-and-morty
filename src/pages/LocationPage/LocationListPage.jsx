import { useEffect } from "react";
import { Search } from "../../Components";
import LocationList from "../../Components/Location/LocationList";
import useFetchStore from "../../store/useFetchStore";
import { locationService } from "../../api";
import { useSearchStore } from "../../store";

export default function LocationPage() {
  const { response, fetchData } = useFetchStore();
  const { isSearchOpen } = useSearchStore();

  useEffect(() => {
    fetchData(locationService.getLocationList);
  }, []);

  const locationList = response.results || [];

  return (
    <>
      <Search placeholder="Найти локацию" />

      {!isSearchOpen && <LocationList locationList={locationList} />}
    </>
  );
}
