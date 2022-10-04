import { useRef, useState } from "react";
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL = 
    `https://pixabay.com/api/?key=29699986-34c552a0800611e4cefed7445&q=${ref.current.value}&image_type=写真`
    //APIを叩く（データフェエッチング
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      })
  }

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => hadleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref}></input>
      </form>
    <ImageGrallery fetchData={fetchData}/>
    </div>
  )
} 

export default App;
