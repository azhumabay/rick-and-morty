import APP_PATH from "../const/router";
import {
  Ellipsis,
  PaginationItem,
  PaginationList,
} from "./styles/Pagination.styled";

export default function Pagination({ pages, currentPage }) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const currentPageNumber = Number(currentPage);

    if (currentPageNumber <= 2) {
      pageNumbers.push(1, 2, 3);
      if (pages > 3) {
        pageNumbers.push("...");
      }
      if (pages > 3) {
        pageNumbers.push(pages);
      }
    } else if (currentPageNumber === pages) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      if (pages > 3) {
        pageNumbers.push(pages - 2, pages - 1);
      }
      pageNumbers.push(pages);
    } else {
      pageNumbers.push(1);
      if (currentPageNumber > 3) {
        pageNumbers.push("...");
      }
      if (currentPageNumber > 1) {
        pageNumbers.push(currentPageNumber - 1);
      }
      pageNumbers.push(currentPageNumber);
      if (currentPageNumber < pages) {
        pageNumbers.push(currentPageNumber + 1);
      }
      if (currentPageNumber < pages - 2) {
        pageNumbers.push("...");
      }
      pageNumbers.push(pages);
    }

    return pageNumbers;
  };

  return (
    <PaginationList>
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <Ellipsis key={index}>...</Ellipsis>
        ) : (
          <PaginationItem
            key={index}
            to={`${APP_PATH.CHARACTERS}/?page=${page}`}
            $active={page === Number(currentPage)}
          >
            {page}
          </PaginationItem>
        )
      )}
    </PaginationList>
  );
}
