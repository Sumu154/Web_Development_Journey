import React from 'react';

const Pagination = ( {total, itemsPerPage, currentPage, setCurrentPage} ) => {
  let pages = [];

  for(let i=1; i<=Math.ceil(total / itemsPerPage) ; i++){
    pages.push(i);
  }


  return (
    <div>
      {pages.map((it, index) => {
        return (
          <button className={`my-4 mx-3 ${it === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} key={index} onClick={()=>setCurrentPage(it)}  > {it} </button>
        )
      })}
    </div>
  );
};

export default Pagination;