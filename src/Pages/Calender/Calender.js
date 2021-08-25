import React,{useState,useEffect} from "react";
import NavBar from "../../Components/Navbar";
import Table from "../../Components/Table";
import {ThingsProvider} from '../../Components/Context/Context';
import 'antd/dist/antd.css';
import moment from "moment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Spin } from 'antd';
import { createUserNoticeList, gitUserNoticeList } from "../../Components/Api/Api";
const Calender = () => {
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const apiConnection= async ()=>{
        const id=localStorage.getItem("id"); 
        if(id!=null){
            setNoticeList(await gitUserNoticeList(id));
        }else{
            localStorage.setItem("id",await createUserNoticeList(id)); 
        }
        setIsLoading(false);
    };
    useEffect(() => {
        apiConnection();
        
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
                    <div>
                        <NavBar/>
                        <Table/>
                    </div>
                }

            </DndProvider>
        </ThingsProvider>
    );
};

export default Calender;
