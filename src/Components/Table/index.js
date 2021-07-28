import React,{useContext,useState} from 'react'
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/Context';

import "./Table.css";
import AddNoticeModal from '../AddNoticeModal';
const Table= () => {
    // eslint-disable-next-line no-unused-vars
    const [noticeList,setNoticeList]=useState([]); 
    const value = useContext(calendarContext);
    const selectday=(day)=>{
      value.setDate.setDate(day)
    }
    
    
    const getListData=(value)=> {
        let listData;
        noticeList.map((day)=>{
         if(day.date.isSame(value,'year')&&day.date.isSame(value,'day')&&day.date.isSame(value, 'month')){
           listData=day.notice
         }
        })   
           return listData || []; 

      }

      const  dateCellRender=(value)=>{
        const listData = getListData(value);
        console.log({noticeList})
        return (
          <ul className="events" >
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.color} text={item.content}  className="cellEvent"/>
              </li>

            ))}          
            <AddNoticeModal value={value} noticeList={noticeList} setNoticeList={setNoticeList }/> 
          </ul>
        );
      }
      
      const getMonthData=(value)=>{
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      const monthCellRender=(value)=> {
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
            <Calendar value={value.Date.Date} onSelect={selectday} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    )
}

export default Table

