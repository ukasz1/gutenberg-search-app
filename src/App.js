import './index.css';
import React from 'react'
import Form from './Form'
import BookList from './Booklist'
import Favourites from './Favourites'
import BookText from './BookText'

function App() {

  return (
    <main>
      <Form />
      <div className='content'>
        <BookList />
        <Favourites />
      </div>
      <BookText />
    </main>
  );
}

export default App;
