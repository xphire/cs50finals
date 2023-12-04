import React from 'react';
import './App.css';
import Header from './components/Headers';
import Main from './components/Main';
import Footer from './components/Footer';
import generate from './generateQR';
import { nanoid } from 'nanoid';

function App() {

  const [image,setImage] = React.useState("https://picsum.photos/seed/picsum/200/300");
  const [url, setUrl] = React.useState("");
  const [history, setHistory] = React.useState(JSON.parse(localStorage.getItem("history")) || []);

  const makeQR = async () => {

    const result = await  generate(url);

    setImage(result);

    const obj = {
      "id" : nanoid(),
      "url" : url,
      "qr" : result
    };

    setHistory((prevHistory) => {


      if (prevHistory.filter((item) => {return item.url.toLowerCase() === url.toLowerCase()})[0])
      {
        return prevHistory;
      }
 

      const laminar = [obj,...prevHistory];

      localStorage.setItem("history",JSON.stringify(laminar));

      return laminar;
    })

  }

  const getUrl = (e) => {

    const val = e.target.value;
    setUrl(val);
    return;
  }

  
  return (
    <div className="App text-muted display-3">
        <Header/>
        <Main image={image} makeQR = {() =>  makeQR(url)} url = {url} getUrl = {(e) => {getUrl(e)}} history={history}/>
        <Footer/>
    </div>
  );
}

export default App;
