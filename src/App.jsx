import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmark] = useState([]);

  const handleBookmark = title => {
    const bookmarkItem = [...bookmarks, title];
    setBookmark(bookmarkItem);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
