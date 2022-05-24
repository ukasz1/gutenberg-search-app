import { useContext } from "react";
import { AppContext } from "./context";

const BookList = () => {

  const { data, searchAll, loading, favouritesTrigger, favouritesRender, showBook } = useContext(AppContext);

  const nextData = () => {
    if (data.next) {
      searchAll(data.next);
    }
  }
  const prevData = () => {
    if (data.previous) {
      searchAll(data.previous);
    }
  }

  const toFavourites = (item) => {
    localStorage.setItem(item.id.toString(), JSON.stringify(item));
    favouritesRender(!favouritesTrigger);
  }

  return (
    <div className="booklist">
      <div className="left"><button type="button" onClick={prevData}><span>{String.fromCharCode(171)}</span></button></div>
      <div className="center">
        <table className="table-books">
          <thead>
            <tr>
              <th>Books<hr /></th>
            </tr>
          </thead>
          <tbody>
            {(!loading && data.results !== undefined) ?
              data.results.map((item, index) => {
                return (
                  <tr key={index} className="tr-content">
                    <td>
                      <div className="record-div" onClick={() => showBook(item)}>
                        <div className="book-record">
                          <b>{item.title}</b>,{' '}
                          <i>{item.agents.length > 0 ? item.agents[item.agents.length - 1].person : ''}</i>
                        </div>
                        <div>
                          <span className="star" onClick={() => toFavourites(item)}>{String.fromCharCode(9733)}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              }) : <Loading />}
          </tbody>
        </table>
      </div>
      <div className="right">
        <button type="button" onClick={nextData}>
          <span>
            {String.fromCharCode(187)}
          </span>
        </button>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <tr>
      <td>
        <span className="loading-span">Loading...</span>
      </td>
    </tr>
  )
}

export default BookList;