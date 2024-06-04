import './index.css';
import React from 'react'
import Form from './Form.tsx'
import BookList from './Booklist.tsx'
import Favourites from './Favourites.tsx'
import BookText from './BookText.tsx'

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
