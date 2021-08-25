import moment from 'moment';
import React, { useState } from 'react';
import { ThingsProvider } from '../Context/Context';
import 'antd/dist/antd.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Notice from './Notice';
export default {
    title: 'Components/Notice',
    component:Notice,
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
        noteData:{
            name: 'noteData',
            type: { name: 'noteData', required: true },
            defaultValue: {color:'red',content:"hi im red"},
            description: 'It is an array containing note for a specific day',
        },
        selectdayOnClick:{
            name: 'selectdayOnClick',
            type: { name: 'function', required: true },
            defaultValue: {},
            description: 'It is a function that modifies the variable Date',
        },
        

    },
   
};

const List = (args) => {  
    const [Date,setDate]=useState(moment());
    const [noticeList,setNoticeList]=useState([]);
    
    const selectdayOnClick=(date)=>{
        setDate(date);
    };
 
    return  (
        
     
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
        
    );
};

export const LivePreview = List.bind({});


LivePreview.args={
    noteData:{color:'red',content:"hi im red"},



};
