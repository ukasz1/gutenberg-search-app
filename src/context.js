import React, { useState, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [favouritesTrigger, favouritesRender] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentBook, setCurrentBook] = useState('');

  const url = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

  useEffect(() => {
    searchAll(url)
  }, []);

  const searchAll = async (url) => {
    try {
      setLoading(true);
      const response = await axios(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response)
    }
  }

  const showBook = (item) => {
    const { resources } = item;
    let link = '';
    resources.forEach((book) => {
      const { uri } = book;
      if (uri.includes('.htm')) {
        link = uri;
      }
    });
    setCurrentBook(link);
  }

  return (
    <AppContext.Provider
      value={{
        searchAll,
        loading,
        setLoading,
        data,
        setData,
        favouritesTrigger,
        favouritesRender,
        currentBook,
        setCurrentBook,
        showBook
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }