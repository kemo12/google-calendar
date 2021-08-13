/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useState } from 'react';
import { ThingsProvider } from '../Context/Context';
import NoticeList from './NoticeList';
import 'antd/dist/antd.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import AddNoticeModal from '../AddNoticeModal';
export default {
    title: 'Components/NoticeList',
    component:NoticeList
};
const List = (args) => {  
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
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
                    <NoticeList  showAddNoticeModal={setIsModalVisible} selectdayOnClick={selectdayOnClick} {...args} />
                    <AddNoticeModal 
                        noticeDayDate={Date}
                        isModalVisible={isModalVisible} 
                        setIsModalVisible={setIsModalVisible} 
                    /> 
                </DndProvider>
            </ThingsProvider>
        </>
    );
};

export const LivePreview = List.bind({});


LivePreview.args={
    dayCellNotices:[
        {color:"yellow",content:"hi im yellow"},
        {color:"red",content:"hi im red"}
    ],


};