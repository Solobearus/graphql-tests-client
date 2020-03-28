import React, { useState } from 'react';
import './App.css';
import { getAllData, addItemToData } from "./API";
function App() {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('initialState');

  const handleAddItemButton = async () => {

    await addItemToData(textInput);
    const newData = await getAllData();
    console.log(newData);

    setData(newData);
  }

  const handleGetAllData = async () => {
    const data = await getAllData();
    setData(data);
  }

  return (
    <div className="App">

      <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
      <button onClick={e => { handleGetAllData() }}>getAllData</button>

      <button onClick={e => { handleAddItemButton() }}>addItem</button>

      {console.log(data)}

      {data && data.map(item =>
        <div key={item.id}>
          {`id: ${item.id} --
          author: ${item.author} --
          text: ${item.text} `}
        </div>
      )}
    </div>
  );
}

export default App;
