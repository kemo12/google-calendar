import React,{ useContext,useMemo,useState } from 'react';
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/CalendarContext';
import "./Table.css";
import AddNoticeModal from '../AddNoticeModal';
import NoticeList from '../NoticeList/NoticeList';
import moment from 'moment';
const Table = () => {
    //State
    const [isModalVisible, setIsModalVisible] = useState(false);

    //contextConsumer
    const contextData = useContext(calendarContext);

    const selectday = (day) => {
        contextData.setDate.setDate(day);
    };
    const getListData = (value) => {
        let listData = [];
        contextData.noticeList.noticeList?.forEach((day) => {
            if (moment(day.date, "MM-DD-YYYY").isSame(value,'day')){
                listData = day.notice;     
            }
        }); 
        return  listData || []; 
    };

    const showAddModal = () => {
        setIsModalVisible(true);

    };

    const  dateCellRender = (value) => {
        const listData = useMemo(() => getListData(value));
        
        return (
            <NoticeList  
                dayCellDate={value} 
                dayCellNotices={listData} 
                selectdayOnClick={selectday} 
                showAddNoticeModal={showAddModal} 
            />
         
        );
    };
      
    const getMonthData = (value) => {
        
        let listData = [];
        contextData.noticeList.noticeList.forEach((day) => {
            if (moment(day.date, "MM-DD-YYYY").isSame(value, 'month')){
                day.notice.forEach((note) => {
                    listData.push(note);
                });
            }
        }); 
        return  listData || []; 
        
    };
      
    const monthCellRender = (value) => {
        const listData = getMonthData(value);
        return (
            <ul className="events" >
                {listData.map((item,index) => (
              
                    <li key={index} className="notice" >
                        <Badge
                            status={item.color} 
                            text={item.content}  
                            className="cellEvent"
                        />
                    </li>
              
                ))}         
            </ul>
        );
    };
      
    return (
        <div>
            <Calendar 
                value={contextData.Date.Date} 
                onSelect={selectday} 
                dateCellRender={dateCellRender} 
                monthCellRender={monthCellRender} 
            />
            <AddNoticeModal 
                noticeDayDate={contextData.Date.Date}
                isModalVisible={isModalVisible} 
                setIsModalVisible={setIsModalVisible} 
            />  
        </div>
    );
};

export default Table;

