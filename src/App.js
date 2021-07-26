import React,{useState} from "react"
import NavBar from "./Components/Navbar";
import Table from "./Components/Table";
import {ThingsProvider} from './Components/Context/Context';
import 'antd/dist/antd.css';
import "./App.css";
import moment from "moment";

function App() {
  const [Date,setDate]=useState(moment());

  return (
    <ThingsProvider 
    value={{
      Date:{Date},
      setDate:{setDate}
    }}>

    <div className="App">
     <NavBar/>
     <Table/>
    </div>
    </ThingsProvider>
  );
}

export default App;
