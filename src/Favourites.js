import { useContext } from 'react'
import { AppContext } from "./context";

const Favourites = () => {
  const { favouritesTrigger, favouritesRender, showBook } = useContext(AppContext);
  const storageKeys = Object.keys(localStorage);

  const deleteBook = (item) => {
    localStorage.removeItem(item);
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
              <tr key={bookObject.id} className="tr-content">
                <td className="record-div" onClick={() => showBook(bookObject)}>
                  <div className='book-record'>
                    <b>{bookObject.title}</b>,{' '}
                    <i>{bookObject.agents.length > 0 ? bookObject.agents[bookObject.agents.length - 1].person : ''}</i>
                  </div>
                  <div className='div-cross'>
                    <span className="cross" onClick={() => { deleteBook(item) }}>{String.fromCharCode(10006)}</span>
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