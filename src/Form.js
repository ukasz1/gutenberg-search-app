import React, { useContext } from 'react';
import { AppContext } from './context';

const Form = () => {
  const { setTitle, searchAll } = useContext(AppContext)

  return (
    <>
      <h1>Gutenberg search</h1>
      <div className='form'>
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" onClick={searchAll}>Search</button>
        </form>
      </div>
    </>
  )
}

export default Form;