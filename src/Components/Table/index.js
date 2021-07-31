import React,{useContext,useState} from 'react'
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/Context';
import "./Table.css";
import AddNoticeModal from '../AddNoticeModal';
import { PlusOutlined } from '@ant-design/icons';
const Table= () => {
    const [noticeList,setNoticeList]=useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
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
      const handleDeleteNotice=(e)=>{

        let noticeListCopy=[...noticeList];
        noticeListCopy.map((day)=>{
            if(day.date.isSame(value.Date.Date,'year')&&day.date.isSame(value.Date.Date,'day')&&day.date.isSame(value.Date.Date, 'month')){
           day.notice.map((notice,i)=>{
           if(parseInt(e.target.id)===i){
            day.notice.splice(i, 1)
              setNoticeList(noticeListCopy) 
           }
          }) 
          }

      })
    }
      const showModal = () => {
        setIsModalVisible(true);
      };

      const  dateCellRender=(value)=>{
        const listData = getListData(value);
        return (
          <ul className="events" >
            {listData.map((item,index) => (
              
              <li key={index} className="notice" >
                <Badge status={item.color} text={item.content}  className="cellEvent"/>
                <div  id={index} onMouseDown={()=>selectday(value)} onMouseUp={handleDeleteNotice} >x</div>
              </li>
              
            ))}
              <li  className="add cellEvent" onClick={showModal}>
              <PlusOutlined/>ADD 
              </li>          
          </ul>
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

