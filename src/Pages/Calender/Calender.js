import React,{useState,useEffect} from "react";
import NavBar from "../../Components/Navbar";
import Table from "../../Components/Table";
import {ThingsProvider} from '../../Components/Context/Context';
import 'antd/dist/antd.css';
import moment from "moment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch } from "react-router-dom";
import { Route} from "react-router-dom/cjs/react-router-dom.min";
import AllTasks from "../../Components/AllTasks/AllTasks";
import axios from 'axios';
import { Spin } from 'antd';
const Calender = () => {
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isLoading,setIsLoading]=useState(true);
    // eslint-disable-next-line no-undef
    const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
    const gitDataFromApi= async ()=>{
        const id=localStorage.getItem("id"); 
        if(id!=null){
            let response =axios.get(`${API_KEY}noticelist/${id}`);
            let list=  (await response).data.noticeList;
                
            setNoticeList(list);

           
        }else{
            let response =axios.post(`${API_KEY}noticelist/`,noticeList); 
            let id=  (await response).data.id;

            localStorage.setItem("id",id);
            
        }
        setIsLoading(false);
    };
    useEffect(() => {
        gitDataFromApi();
        
    }, []);
    return (
        <ThingsProvider 
            value={{
                Date:{Date},
                setDate:{setDate},
                noticeList:{noticeList},
                setNoticeList:{setNoticeList}
            }}>
            <DndProvider backend={HTML5Backend}> 
                {isLoading?
                    <div className="loading">
                        <Spin size="large"/>
                    </div>
                    :

                    <div className="App">
                        <NavBar/>
                        <Table/>
                    </div>
                }
                <Switch>
                    <Route path="/all-tasks"  exact>
                        <AllTasks setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
                    </Route>
                </Switch>
            </DndProvider>
        </ThingsProvider>
    );
};

export default Calender;
