import React, { useState, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState({});
  const [favourites, setFavourites] = useState({});

  const url = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

  useEffect(() => {
    searchAll()
  }, []);

  const searchAll = async () => {
    try {
      const response = await axios(url);
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