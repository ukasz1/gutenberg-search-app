import React, { useState, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [favourites, setFavourites] = useState({});

  const url = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

  useEffect(() => {
    searchAll(url)
  }, []);

  const searchAll = async (url) => {
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
        // title,
        // setTitle,
        data,
        setData,
        favourites,
        setFavourites,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }