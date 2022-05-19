import { useState, useContext, useEffect } from "react";
import { AppContext } from "./context";


const BookList = () => {

  const { data } = useContext(AppContext);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.results)
  }, [data])

  // console.log('newData: ', newData)
  console.log(newData);

  return (
    <div className="booklist">
      <div className="left"><button type="button">{String.fromCharCode(171)}</button></div>
      <div className="center">
        <table>
          <thead>
            <th>Books<hr /></th>
          </thead>
          <tbody>
            {(newData != undefined) ? newData.map((item, index) => {
              return <tr><td><div key={index}>{item.title}</div></td></tr>
            }) : <span>Loading...</span>}
          </tbody>
        </table>
      </div>
      <div className="right"><button type="button">{String.fromCharCode(187)}</button></div>
    </div>
  )
}

export default BookList;