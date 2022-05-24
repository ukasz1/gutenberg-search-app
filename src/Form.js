import React, { useContext, useState } from 'react';
import { AppContext } from './context';

const Form = () => {
  const { /*title, setTitle,*/ searchAll } = useContext(AppContext);
  const [title, setTitle] = useState('');

  const findBooks = (e) => {
    e.preventDefault();
    const url = `https://gnikdroy.pythonanywhere.com/api/book/?format=json&search=${title}`;
    searchAll(url);
  }

  return (
    <>
      <h1 className='main-title'>Gutenberg search</h1>
      <div className='form'>
        <form>
          <input type="text" className='text-input' onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" className='submit-button' onClick={(e) => findBooks(e)}>Search</button>
        </form>
      </div>
    </>
  )
}

export default Form;