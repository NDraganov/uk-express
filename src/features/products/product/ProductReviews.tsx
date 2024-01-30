import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useGetCommentsQuery } from "../../../api/productsApiSlice";
import { closeReviews } from "../productsSlice";
import { getTotalPages } from "../../pagination/paginationSlice";
import Pagination from "../../pagination/Pagination";
import userAvatar from "../../../assets/images/user.jpg";

interface ProductReviewsProps {
  title: string | undefined;
}

export default function ProductReviews({ title }: ProductReviewsProps) {
  const { currentPage, itemsPerPage, totalPages } = useAppSelector(
    (state) => state.pagination,
  );
  const { data: comments } = useGetCommentsQuery(undefined);
  const dispatch = useAppDispatch();

  dispatch(getTotalPages(comments?.comments.length));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = comments?.comments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="flex flex-col justify-center pt-20" id="productReviews">
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-xl">
          Reviews for{" "}
          <span className="font-semibold dark:text-white">{title}</span>
        </p>
        <button
          className="text-sm font-light underline hover:cursor-pointer hover:text-slate-500 dark:hover:text-gray-300 sm:text-base"
          onClick={() => dispatch(closeReviews())}
        >
          hide reviews
        </button>
      </div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {currentItems?.map((review) => (
          <li
            className="rounded-md border border-slate-300 p-4 dark:border-gray-500"
            key={review.id}
          >
            <div className="flex items-center justify-start gap-4">
              <img className="w-8 rounded-full" src={userAvatar} alt="user" />
              <p className="font-medium dark:text-white">
                {review.user.username}
              </p>
            </div>
            <div className="px-12 py-2 sm:px-0">
              <p className="font-light text-slate-500 dark:text-gray-400">
                {review.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
