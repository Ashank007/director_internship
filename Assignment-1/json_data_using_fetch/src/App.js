import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [data,setdata] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      if (!response.ok) {
        console.log("Network response was not ok");
      }
      return response.json();
    }).then((response) => setdata(response));
  },[]);
  return (
    <div className="App">
      <h1>React Page that Fetches JSON Data Using useEffect</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
