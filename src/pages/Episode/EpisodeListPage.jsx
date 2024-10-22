import { Pagination } from "../../Components";
import Search from "../../Components/Search";

export default function EpisodeListPage() {
  return (
    <>
      <Search placeholder={"Найти эпизод"} />

      <Pagination pages={4} currentPage={1} />
    </>
  );
}
