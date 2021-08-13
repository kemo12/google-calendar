import moment from 'moment';
import React, { useState } from 'react';
import { ThingsProvider } from '../Context/Context';
import Table from './index';
import 'antd/dist/antd.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
export default {
    title: 'Components/Table',
    component:Table
};
export  const LivePreview = () => {  
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    return  (
        <>

            <ThingsProvider 
                value={{
                    Date:{Date},
                    setDate:{setDate},
                    noticeList:{noticeList},
                    setNoticeList:{setNoticeList}
                }}>
                <DndProvider backend={HTML5Backend}> 

                    <Table />
                </DndProvider>
            </ThingsProvider>
        </>
    );
};


 


