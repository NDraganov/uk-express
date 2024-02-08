import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useGetCommentsQuery } from "../../../../api/productsApiSlice";
import { closeReviews } from "../../productsSlice";
import { getTotalPages } from "../../../pagination/paginationSlice";
import Pagination from "../../../pagination/Pagination";
import Icon from "../../../../ui/Icon";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
// import {
//   increaseDislikes,
//   increaseLikes,
//   setReviews,
// } from "./productReviewsSlice";

interface ProductReviewsProps {
  title: string | undefined;
}

export default function ProductReviews({ title }: ProductReviewsProps) {
  const { currentPage, itemsPerPage, totalPages } = useAppSelector(
    (state) => state.pagination,
  );
  // const { likes, dislikes } = useAppSelector((state) => state.productReviews);
  const { data: reviews } = useGetCommentsQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPages(reviews?.comments.length));
  }, [dispatch, reviews]);

  // useEffect(() => {
  //   dispatch(setReviews(reviews?.comments));
  // }, [dispatch, reviews]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews?.comments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div
      className="flex flex-col justify-center pt-10 sm:mx-64"
      id="productReviews"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-xl">
          Reviews for{" "}
          <span className="font-semibold dark:text-white">{title}</span>
        </p>
        <button
          className="text-sm font-light underline hover:cursor-pointer hover:text-slate-500 dark:hover:text-gray-300 sm:text-base"
          title="Hide reviews"
          onClick={() => dispatch(closeReviews())}
        >
          hide reviews
        </button>
      </div>

      <ul className="mx-0 mt-5 grid">
        {currentItems?.map((review) => (
          <li
            className="flex h-32 gap-2 border-t border-slate-300 py-5  text-sm font-light dark:border-gray-500 sm:gap-0 sm:px-5"
            key={review.id}
          >
            <div className="w-1/4">
              <p className="dark:text-white">{review.user.username}</p>
              <p>5 days ago</p>
            </div>

            <div className="flex w-3/4 flex-col justify-between">
              <div className="">
                <p className="dark:text-gray-400">{review.body}</p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <p>Was this helpful?</p>
                <button
                  className="flex items-center gap-1"
                  title="Like"
                  // onClick={() => dispatch(increaseLikes(review.id))}
                >
                  <Icon value={{ className: "fill-black" }}>
                    <BiSolidLike />
                  </Icon>
                  <span>Likes</span>
                </button>

                <button
                  className="flex items-center gap-1"
                  title="Dislike"
                  // onClick={() => dispatch(increaseDislikes())}
                >
                  <Icon value={{ className: "fill-black" }}>
                    <BiSolidDislike />
                  </Icon>
                  <span>Dislikes</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
