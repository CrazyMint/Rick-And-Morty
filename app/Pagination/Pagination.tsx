import Link from "next/link";
import React from "react";

const Pagination = ({
	curPage,
	totalPage,
}: {
	curPage: number;
	totalPage: number;
}) => {
	return (
		<div className="flex gap-4">
			{/* previous button */}
			<Link
				className={
					"page-btn " +
					(curPage <= 1 ? "pointer-events-none cursor-pointer" : "")
				}
				href={`/${curPage - 1}`}
			>
				&lt;
			</Link>

			{curPage > 1 && (
				<Link className="page-btn" href={"/1"}>
					1
				</Link>
			)}
			{curPage > 2 && curPage < 4 && (
				<Link className="page-btn" href={"/2"}>
					2
				</Link>
			)}
			{/* {curPage > 3 && curPage < 4 && (
				<Link className="page-btn" href={"/3"}>
					3
				</Link>
			)} */}
			{curPage >= 4 && <span>...</span>}
			{curPage >= 4 && curPage <= totalPage - 4 && (
				<Link className="page-btn" href={`/${curPage - 1}`}>
					{curPage - 1}
				</Link>
			)}
			{curPage - 4 >= totalPage - 4 && (
				<Link className="page-btn" href={`/${curPage - 4}`}>
					{curPage - 4}
				</Link>
			)}
			{curPage - 3 >= totalPage - 4 && (
				<Link className="page-btn" href={`/${curPage - 3}`}>
					{curPage - 3}
				</Link>
			)}
			{curPage - 2 >= totalPage - 4 && (
				<Link className="page-btn" href={`/${curPage - 2}`}>
					{curPage - 2}
				</Link>
			)}
			{curPage - 1 >= totalPage - 4 && (
				<Link className="page-btn" href={`/${curPage - 1}`}>
					{curPage - 1}
				</Link>
			)}

			{/* current page */}
			<Link className="page-btn cur-page-btn" href={`/${curPage}`}>
				{curPage}
			</Link>

			{curPage + 1 <= 5 && (
				<Link className="page-btn" href={`/${curPage + 1}`}>
					{curPage + 1}
				</Link>
			)}
			{curPage + 2 <= 5 && (
				<Link className="page-btn" href={`/${curPage + 2}`}>
					{curPage + 2}
				</Link>
			)}
			{curPage + 3 <= 5 && (
				<Link className="page-btn" href={`/${curPage + 3}`}>
					{curPage + 3}
				</Link>
			)}
			{curPage + 4 <= 5 && (
				<Link className="page-btn" href={`/${curPage + 4}`}>
					{curPage + 4}
				</Link>
			)}
			{curPage >= 5 && curPage <= totalPage - 2 && (
				<Link className="page-btn" href={`/${curPage + 1}`}>
					{curPage + 1}
				</Link>
			)}

			{curPage <= totalPage - 3 && <span>...</span>}
			{curPage < totalPage && (
				<Link className="page-btn" href={`/${totalPage}`}>
					{totalPage}
				</Link>
			)}

			{/* next button */}
			<Link
				className={
					"page-btn " + (curPage >= totalPage ? "pointer-events-none" : "")
				}
				href={`/${curPage + 1}`}
			>
				&gt;
			</Link>
		</div>
	);
};

export default Pagination;
