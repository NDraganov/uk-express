import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { nextPage, paginate, prevPage } from "./paginationSlice";

interface PaginationProps {
  totalPages: number | undefined;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const { currentPage } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  const pageNumbers = [];

  if (totalPages !== undefined) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  function handlePreviousClick() {
    dispatch(prevPage());
    if (currentPage > 1) window.scrollTo(0, 0);
  }

  function handleNextClick() {
    dispatch(nextPage());
    if (currentPage < pageNumbers.length) window.scrollTo(0, 0);
  }

  return (
    <nav className="my-4 flex items-center justify-center">
      <button
        className={`flex h-8 items-center justify-center rounded-l-lg border border-r-0 px-4 py-2 font-light sm:h-10 ${
          currentPage > 1
            ? "border-gray-300 hover:bg-slate-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white"
            : "text-gray-400 dark:border-gray-700 dark:text-gray-500"
        }`}
        title="Previous page"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <ul
        className={`flex items-center last:border-r last:border-r-gray-300 dark:last:border-r-gray-500 ${
          pageNumbers.length > 5 &&
          "w-72 overflow-x-scroll sm:w-auto sm:overflow-x-visible"
        }`}
      >
        {pageNumbers.map((page, i) => (
          <Link
            to="#"
            key={i}
            onClick={() => {
              dispatch(paginate(page));
              window.scrollTo(0, 0);
            }}
          >
            <li
              className={`flex h-8 w-10 items-center justify-center border border-r-0 border-gray-300 font-light hover:bg-slate-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white sm:h-10 sm:w-14 ${
                page === currentPage
                  ? "bg-cyan-50 text-cyan-600 dark:bg-slate-600 dark:text-white"
                  : ""
              }`}
            >
              {page}
            </li>
          </Link>
        ))}
      </ul>
      <button
        className={`flex h-8 items-center justify-center rounded-r-lg border px-4 py-2 font-light sm:h-10 ${
          currentPage < pageNumbers.length
            ? "border-gray-300 hover:bg-slate-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white"
            : "text-gray-400 dark:border-gray-700 dark:text-gray-500"
        }`}
        title="Next page"
        onClick={handleNextClick}
      >
        Next
      </button>
    </nav>
  );
}
