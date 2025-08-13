function Pagination({ totalPages, paginate, currentPage }) {
  const pages = []

  for(let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <nav id="pagination">
      {pages.map((page, i) => {
        return (
        <button 
        key={i}
        onClick={() => paginate(page)}
        className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      )})}
    </nav>
  )
}

export default Pagination
