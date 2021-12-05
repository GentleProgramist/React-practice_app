

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { useState } from "react";
// import ReactDOM from "react-dom";

// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );
//   const [mycar, setmycar] = useState('Volvo');
//     console.log(textarea)
//     console.log(mycar)
//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//     setmycar(event.target.value)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} /> <br/>
//       <select value={mycar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   )
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));
