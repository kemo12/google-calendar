import moment from 'moment';
import React, { useState } from 'react';
import { ThingsProvider } from '../Context/Context';
import 'antd/dist/antd.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Notice from './Notice';
export default {
    title: 'Components/Notice',
    component:Notice
};
const List = (args) => {  
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    
    const selectdayOnClick=(date)=>{
        setDate(date);
    };
 
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
                    <Notice  selectdayOnClick={selectdayOnClick} {...args} />
                    
                </DndProvider>
            </ThingsProvider>
        </>
    );
};

export const LivePreview = List.bind({});


LivePreview.args={
    noteData:{color:'red',content:"hi im red"},


};