import { useState, useContext, useEffect } from "react";
import { AppContext } from "./context";


const BookList = () => {

  const { data, searchAll } = useContext(AppContext);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.results)
  }, [data])

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

  return (
    <div className="booklist">
      <div className="left"><button type="button" onClick={prevData}>{String.fromCharCode(171)}</button></div>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>Books<hr /></th>
            </tr>
          </thead>
          <tbody>
            {(newData !== undefined) ?
              newData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div >
                        <b>{item.title}</b>,
                        <i> {item.agents[0].person}</i>
                      </div>
                    </td>
                  </tr>
                )
              }) : (<tr><td><span>Loading...</span> </td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="right"><button type="button" className="right-submit" onClick={nextData}>{String.fromCharCode(187)}</button></div>
    </div>
  )
}

export default BookList;