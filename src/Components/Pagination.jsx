import { useLocation } from "react-router-dom";
import {
  Ellipsis,
  PaginationItem,
  PaginationList,
} from "./styles/Pagination.styled";

export default function Pagination({ pages, currentPage }) {
  const location = useLocation();

  const getPageNumbers = () => {
    const pageNumbers = [];
    const currentPageNumber = Number(currentPage);

    const startPage = Math.max(1, currentPageNumber - 1);
    const endPage = Math.min(pages, currentPageNumber + 1);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < pages) {
      if (endPage < pages - 1) {
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
            to={`${location.pathname}?page=${page}`}
            $active={page === Number(currentPage)}
          >
            {page}
          </PaginationItem>
        )
      )}
    </PaginationList>
  );
}
