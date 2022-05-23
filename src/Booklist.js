import { useState, useContext, useEffect } from "react";
import { AppContext } from "./context";

const BookList = () => {

  const { data, searchAll, loading, setLoading } = useContext(AppContext);
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

  console.log(data);
  console.log(newData);

  return (
    <div className="booklist">
      <div className="left"><button type="button" onClick={prevData}><span>{String.fromCharCode(171)}</span></button></div>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>Books<hr /></th>
            </tr>
          </thead>
          <tbody>
            {(!loading && newData !== undefined) ?
              newData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div >
                        <b>{item.title}</b>,
                        <i> {item.agents.length > 0 ? item.agents[item.agents.length - 1].person : ''}</i>
                      </div>
                    </td>
                  </tr>
                )
              }) : <Loading />}
          </tbody>
        </table>
      </div>
      <div className="right"><button type="button" onClick={nextData}><span>{String.fromCharCode(187)}</span></button></div>
    </div>
  )
}

const Loading = () => {
  return <tr><td><span>Loading...</span></td></tr>
}

export default BookList;