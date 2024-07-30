import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Navbar from './assets/components/Navbar/navbar.jsx'
import Searchbar from './assets/components/Searchbar/searchbar.jsx'
import Lorem from './assets/components/Lorem/lorem.jsx'
import Option from './assets/components/Option/option.jsx'
import Main from './assets/components/Main/main.jsx'
import './App.css'
import Footer from './assets/components/Footer/footer.jsx'
function App() {
  const [option, setOption] = useState(1);
  const [data, setData] = useState('');

  const handleOptionData = (optionData,str) => {
    setOption(optionData);
    setData(str);
  };
  return (
    <>
      <Navbar />
      <Searchbar />
      <Option onSendData={handleOptionData} />
      <Main render={option} data ={data}/>
      <Footer />
    </>
  );
}

export default App;
