import React,{useContext,useState} from 'react'
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/Context';
import "./Table.css";
import AddNoticeModal from '../AddNoticeModal';
import NoticeList from './NoticeList';
const Table= () => {
    const [noticeList,setNoticeList]=useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    //const [selectedNoteId,setSelectedNoteId]=useState();
  

    const value = useContext(calendarContext);
    const selectday=(day)=>{
            value.setDate.setDate(day)
    }
    const getListData=(value)=> {
      let listData=[];
      noticeList.map((day)=>{
         if(day.date.isSame(value,'year')&&day.date.isSame(value,'day')&&day.date.isSame(value, 'month')){
          listData=day.notice     
         }
        }) 
           return  listData||[]; 
      }

      const showAddModal = () => {
        setIsModalVisible(true);

      };

      

      const  dateCellRender=(value)=>{
        const listData = getListData(value);
        return (
            <NoticeList setNoticeList={setNoticeList} noticeList={noticeList}Value={value} selectday={selectday} showAddModal={showAddModal} listData={listData} />
         
        );
      }
      
      const getMonthData=(value)=>{
        
        let listData=[];
        noticeList.map((day)=>{
           if(day.date.isSame(value,'year')&&day.date.isSame(value, 'month')){
             day.notice.map((note)=>{

               listData.push(note)
             })
             
           }
           console.log(listData)
  
          }) 
             return  listData||[]; 
        
      }
      
      const monthCellRender=(value)=> {
        const listData = getMonthData(value);
        return (
          <ul className="events" >
            {listData.map((item,index) => (
              
              <li key={index} className="notice" >
                <Badge status={item.color} text={item.content}  className="cellEvent"/>
              </li>
              
            ))}         
          </ul>
        );
      }
      
    return (
        <div>
            <Calendar value={value.Date.Date} onSelect={selectday} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            <AddNoticeModal value={value.Date.Date} noticeList={noticeList} isModalVisible={isModalVisible} setNoticeList={setNoticeList} setIsModalVisible={setIsModalVisible} />  
        </div>
    )
}

export default Table

