import moment from 'moment';
import React, { useState } from 'react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { ThingsProvider } from '../Context/Context';
import history from '../react-router/history';
import NavBar from './index';
import 'antd/dist/antd.css';
export default {
    title: 'Components/NavBar',
    component: NavBar,

};
export  const LivePreview = () => {  
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    return  (
        <>

            <Router history={history}>
                <ThingsProvider 
                    value={{
                        Date:{Date},
                        setDate:{setDate},
                        noticeList:{noticeList},
                        setNoticeList:{setNoticeList}
                    }}>
                    <NavBar />
                </ThingsProvider>
            </Router>
        </>
    );
};


 


