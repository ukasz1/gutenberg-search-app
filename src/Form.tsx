import React, { useContext, useState } from 'react';
import { AppContext, AppContextType } from './context';

const Form = () => {
  const { searchAll } = useContext(AppContext) as AppContextType;
  const [title, setTitle] = useState('');

  const findBooks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://gnikdroy.pythonanywhere.com/api/book/?format=json&search=${title}`;
    searchAll(url);
  }

  return (
    <>
      <h1 className='main-title'>Gutenberg search</h1>
      <div className='form'>
        <form onSubmit={findBooks}>
          <input type="text" className='text-input' onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" className='submit-button'>Search</button>
        </form>
      </div>
    </>
  )
}

export default Form;
