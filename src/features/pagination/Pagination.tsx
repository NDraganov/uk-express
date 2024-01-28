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

  if (totalPages !== undefined)
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

  return (
    <nav className="my-4 flex items-center justify-center">
      <button onClick={() => dispatch(prevPage())}>Previous</button>
      <ul className="flex items-center last:border-r last:border-r-gray-300 dark:last:border-r-gray-500">
        {pageNumbers.map((page, i) => (
          <Link to="#" key={i} onClick={() => dispatch(paginate(page))}>
            <li
              className={`flex h-10 w-14 items-center justify-center border border-r-0 border-gray-300 font-light hover:bg-slate-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white ${
                page == currentPage
                  ? "bg-cyan-50 text-cyan-600 dark:bg-slate-700 dark:text-white"
                  : ""
              }`}
            >
              {page}
            </li>
          </Link>
        ))}
      </ul>
      <button onClick={() => dispatch(nextPage())}>Next</button>
    </nav>
  );
}
