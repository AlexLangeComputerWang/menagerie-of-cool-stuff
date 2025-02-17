import React from 'react'

const Navbar = ({ pageNames, currentPage, onPageChange }) => {

  return (
    <nav>
      <ul>
        {pageNames.map((page) => (
          <li key={page}>
            <a
              href="#"
              data-page={page}
              className={currentPage === page ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                onPageChange(page)
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar 