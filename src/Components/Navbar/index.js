import React,{useContext,useState} from 'react'
import moment from 'moment';
import {Button} from 'antd'
import {LeftOutlined,RightOutlined} from "@ant-design/icons"
import calendarContext from '../Context/Context';
import "./Navbar.css"
import AllTasks from '../AllTasks/AllTasks';

const NavBar =()=> {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const value = useContext(calendarContext);
    const setToday=()=>{
        value.setDate.setDate(moment())
    }
    const nextMonth=()=>{
        value.setDate.setDate(value.Date.Date.clone().add(1, 'months'));
        
    }

    const prevMonth=()=>{
        value.setDate.setDate(value.Date.Date.clone().subtract(1, 'months'));
        
    }
    const showModal = () => {
        setIsModalVisible(true);
      };
    
    return (
        <div className="Navbar">
            <div>
            <LeftOutlined  className="icon" onClick={prevMonth}/>
            <RightOutlined className="icon" onClick={nextMonth}/>
            </div>
            <Button onClick={setToday}>Today</Button>
            <Button  onClick={showModal} >All Notices</Button>
            <AllTasks setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}  noticeList={value.noticeList.noticeList} />

        </div>
    )
}

export default NavBar
