import React, { useState, useContext } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState({});
  const [favourites, setFavourites] = useState({});

  const url = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

  const searchAll = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(url);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <AppContext.Provider
      value={{
        searchAll,
        title,
        setTitle,
        data,
        setData,
        favourites,
        setFavourites
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }