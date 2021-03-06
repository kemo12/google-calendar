import moment from 'moment';
import React, { useState } from 'react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { ThingsProvider } from '../Context/CalendarContext';
import history from '../react-router/history';
import NavBar from './index';
import 'antd/dist/antd.css';
export default {
    title: 'Components/NavBar',
    component: NavBar,
    argTypes: {
        Date:{
            name: 'Date',
            type: { name: 'Date', required: true },
            defaultValue:  moment(),
            description: 'An object of a date type by which the day is determined',
            control: { type: 'Date' }
        }
        ,
        setDate:{
            name: 'setDate',
            type: { name: 'function', required: true },
            defaultValue: "",
            description: 'It is a function through which the history is modified',
        }
    },

};
export const Nav = () => {  
    const [Date,setDate] = useState(moment());
    const [noticeList,setNoticeList] = useState([]);
    return  (
        

        <Router history={history}>
            <ThingsProvider 
                value={{
                    Date:{ Date },
                    setDate:{ setDate },
                    noticeList:{ noticeList },
                    setNoticeList:{ setNoticeList }
                }}>
                <NavBar  />
            </ThingsProvider>
        </Router>
        
    );
};




 


