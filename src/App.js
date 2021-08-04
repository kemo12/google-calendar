import React,{useState} from "react"
import NavBar from "./Components/Navbar";
import Table from "./Components/Table";
import {ThingsProvider} from './Components/Context/Context';
import 'antd/dist/antd.css';
import "./App.css";
import moment from "moment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [Date,setDate]=useState(moment());

  return (
    <ThingsProvider 
    value={{
      Date:{Date},
      setDate:{setDate}
    }}>
      <DndProvider backend={HTML5Backend}> 

    <div className="App">
     <NavBar/>
     <Table/>
    </div>
    </DndProvider>
    </ThingsProvider>
  );
}

export default App;
