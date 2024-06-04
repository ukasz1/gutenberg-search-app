import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios from 'axios';

interface Agent {
  person: string;
}

interface Resource {
  uri: string;
}

interface Book {
  id: number;
  title: string;
  agents: Agent[];
  resources: Resource[];
}

interface Data {
  next?: string;
  previous?: string;
  results?: Book[];
}

interface AppContextType {
  data: Data;
  favouritesTrigger: boolean;
  loading: boolean;
  currentBook: string;
  searchAll: (url: string) => void;
  showBook: (item: Book) => void;
  favouritesRender: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [data, setData] = useState({});
  const [favouritesTrigger, favouritesRender] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentBook, setCurrentBook] = useState('');

  const url = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

  useEffect(() => {
    searchAll(url)
  }, []);

  const searchAll = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios(url);
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      console.log(error.response)
    }
  }

  const showBook = (item: Book) => {
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
        data,
        favouritesTrigger,
        favouritesRender,
        currentBook,
        showBook
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider, AppContextType }
