import React, { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${
            i === currentPage ? 'bg-primary text-white' : 'bg-slate-200'
          } px-3 rounded-md py-1 cursor-pointer`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="flex space-x-2 text-sm">
      <li
        className={`${
          currentPage === 1 ? 'bg-slate-200' : 'bg-primary text-white'
        } px-3 rounded-md py-1 cursor-pointer`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </li>
      {renderPageNumbers()}
      <li
        className={`${
          currentPage === totalPages ? 'bg-slate-200' : 'bg-primary text-white'
        } px-3 rounded-md py-1 cursor-pointer`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
