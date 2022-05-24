import { useContext } from 'react'
import { AppContext } from "./context";

const Favourites = () => {
  const { favouritesTrigger, favouritesRender, handleRecord } = useContext(AppContext);
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
                <td className="record-div">
                  <div className='book-record' onClick={(e) => { deleteBook(e) }}>
                    <b>{bookObject.title}</b>,{' '}
                    <i>{bookObject.author}</i>
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