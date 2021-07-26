import React,{useContext} from 'react'
import moment from 'moment';
import {Button} from 'antd'
import {LeftOutlined,RightOutlined} from "@ant-design/icons"
import calendarContext from '../Context/Context';
import "./Navbar.css"

const NavBar =()=> {
    
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
    return (
        <div className="Navbar">
            <div>
            <LeftOutlined  className="icon" onClick={prevMonth}/>
            <RightOutlined className="icon" onClick={nextMonth}/>
            </div>
            <Button onClick={setToday}>Today</Button>
        </div>
    )
}

export default NavBar
