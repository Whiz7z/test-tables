import React, { useState } from "react";

type Props = {
  length: number;
  itemsPerPage: number;
  onPaginate: (paging: {
    indexOfFirstItem: number;
    indexOfLastItem: number;
  }) => void;
};

const PaginationBtns = ({ length, onPaginate, itemsPerPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginateHandler = (pageNumber: number) => {
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentPage(pageNumber);
    onPaginate({
      indexOfFirstItem: indexOfFirstItem,
      indexOfLastItem: indexOfLastItem,
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-center">
          {Array.from({
            length: Math.ceil(length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`btn  mx-1 ${
                currentPage === index + 1
                  ? "btn-secondary text-white"
                  : "btn-outline-secondary"
              }`}
              onClick={() => paginateHandler(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PaginationBtns;
