import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import {pageContent} from "./pageContent.jsx";

function App() {

  const getPageKeys = (obj) => Object.keys(obj);
  const pageKeys = getPageKeys(pageContent);

  //Pages are handled by session storage.
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem('currentPage');
    return savedPage ? savedPage : pageKeys[0];
  });


  useEffect(() => {
    // Enable view transitions if supported
    document.documentElement.classList.add(
      'view-transitions-support'
    )
  }, [])

  //1) View Transition API with CSS for dom updates.
  const handlePageChange = async (page) => {
    if (page === currentPage) return;

    //If ViewTransition natively doesn't exist skip it
    if (!document.startViewTransition) {
      setCurrentPage(page);
      return;
    }

    await document.startViewTransition(() => {
      setCurrentPage(page);
    });
    sessionStorage.setItem('currentPage', page);
  }

  return (
    <>
      <Navbar pageNames ={pageKeys} currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        <div className="page active">
          <h1>{pageContent[currentPage].title}</h1>
          <section>{pageContent[currentPage].content}</section>
        </div>
      </main>
    </>
  )
}

export default App 