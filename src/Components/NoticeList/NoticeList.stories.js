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
    component:NoticeList,
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
        },
        noticeList:{
            name: 'noticeList',
            type: { name: 'array', required: true },
            defaultValue: {},
            description: 'It is an array in which notes are stored',

        },
        setNoticeList:{
            name: 'setNoticeList',
            type: { name: 'function', required: true },
            defaultValue: {},
            description: 'It is an array through which to modify the stored array of notes',
        },
        showAddNoticeModal:{
            name: 'showAddNoticeModal',
            type: { name: 'string', required: true },
            defaultValue: {},
            description: 'It is a question about changing the state value of the modal',
            control: { type: 'string' }
    
        },
        selectdayOnClick:{
            name: 'selectdayOnClick',
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'It is a function that modifies the variable Date',
        },
        dayCellNotices:{
            name: 'dayCellNotices',
            type: { name: 'array', required: true },
            defaultValue: [
                {color:"yellow",content:"hi im yellow"},
                {color:"red",content:"hi im red"}
            ],
            description: 'It is an array containing all notes for a specific day',
        },

    },
   

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