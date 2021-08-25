import React,{useContext,useState} from 'react';
import moment from 'moment';
import {Button} from 'antd';
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
import calendarContext from '../Context/Context';
import "./Navbar.css";
import AllTasksModal from '../AllTasks/AllTasks';
import { Link,Route,Switch } from 'react-router-dom';

const NavBar =()=> {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const contextData = useContext(calendarContext);
    const setToday=()=>{
        contextData.setDate.setDate(moment());
    };
    const nextMonth=()=>{
        contextData.setDate.setDate(contextData.Date.Date.clone().add(1, 'months'));
        
    };

    const prevMonth=()=>{
        contextData.setDate.setDate(contextData.Date.Date.clone().subtract(1, 'months'));
        
    };
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
            <Link to="all-tasks"><Button  onClick={showModal} >All Notices</Button></Link>
            <Switch>
                <Route path="/all-tasks"  exact>
                    <AllTasksModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
                </Route>
            </Switch>

        </div>
    );
};

export default NavBar;
