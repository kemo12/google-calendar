import React,{useContext,useState} from 'react'
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/Context';

import "./Table.css";
import moment from 'moment';
const Table= () => {

    // eslint-disable-next-line no-unused-vars
    const [noticeList,setNoticeList]=useState(
      [
      {
        date:moment(new Date() ),
        notice:[
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },

         ]
      },
      {
        date:moment(new Date() ).add(1,'month'),
        notice:[
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
         ]
      }
    ]
    ); 
    const value = useContext(calendarContext);

    const selectday=(day)=>{
      value.setDate.setDate(day)
    }
    
    
    const getListData=(value)=> {
        let listData;
        console.log(noticeList)
        noticeList.map((day)=>{
         if(day.date.isSame(value,'year')&&day.date.isSame(value,'day')&&day.date.isSame(value, 'month')){
           listData=day.notice
         }
        })   
           return listData || []; 

      }

      function dateCellRender(value) {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content}  className="cellEvent"/>
              </li>
            ))}
          </ul>
        );
      }
      
      function getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }
      
    return (
        <div>
            <Calendar value={value.Date.Date} onSelect={selectday} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
        </div>
    )
}

export default Table

