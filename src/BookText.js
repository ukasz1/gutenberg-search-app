import { useContext } from "react";
import { AppContext } from "./context";

const BookText = () => {
  const { currentBook } = useContext(AppContext);

  return (
    <div className="book-text">
      <iframe src={currentBook} title="currentBook">sdfsd</iframe>
    </div>
  )
}

export default BookText;