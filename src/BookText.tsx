import { useContext } from "react";
import { AppContext, AppContextType } from "./context";
import React from "react";

const BookText = () => {
  const { currentBook } = useContext(AppContext) as AppContextType;

  return (
    <div className="book-text">
      <iframe src={currentBook} title="currentBook"></iframe>
    </div>
  )
}

export default BookText;
