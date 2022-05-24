import { useContext } from 'react'
import { AppContext } from "./context";

const Favourites = () => {
  const { favouritesTrigger, favouritesRender, handleRecord, showBook } = useContext(AppContext);
  const storageKeys = Object.keys(localStorage);

  const deleteBook = (e) => {
    const favObject = handleRecord(e);
    localStorage.removeItem(favObject.title + favObject.author);
    favouritesRender(!favouritesTrigger);
  }

  return (
    <div className="favourites">
      <table>
        <thead>
          <tr>
            <th>Favourites<hr /></th>
          </tr>
        </thead>
        <tbody>
          {storageKeys.map((item) => {
            const bookObject = JSON.parse(localStorage.getItem(item));
            return (
              <tr key={item} className="tr-content">
                <td className="record-div" /*onClick={() => showBook(item)}*/>
                  <div className='book-record'>
                    <b>{bookObject.title}</b>,{' '}
                    <i>{bookObject.author}</i>
                  </div>
                  <div>
                    <span className="star" onClick={(e) => { deleteBook(e) }}>{String.fromCharCode(10006)}</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Favourites;