import React,{useContext,useState} from 'react'
import { Calendar, Badge } from 'antd';
import calendarContext from '../Context/Context';
import "./Table.css";
import AddNoticeModal from '../AddNoticeModal';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
const Table= () => {
    // eslint-disable-next-line no-unused-vars
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
           let m=day.notice;

           listData.push(m)
         }

        })

           return  listData||[]; 

      }

      const showModal = () => {
        setIsModalVisible(true);
      };

      const  dateCellRender=(value)=>{
        const listData = getListData(value);
        console.log(listData)
        return (
          <ul className="events" >
            {listData.map((item) => (
              item.map((event,index)=>(
              <li key={index} className="notice">
                <Badge status={item[index].color} text={item[index].content}  className="cellEvent"/>
                <CloseOutlined />
              </li>
              )
            )))}
              <li  className="add cellEvent" onClick={showModal}>
              <PlusOutlined/>ADD 
              </li>          
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
            <AddNoticeModal value={value.Date.Date} noticeList={noticeList} isModalVisible={isModalVisible} setNoticeList={setNoticeList} setIsModalVisible={setIsModalVisible} /> 

        </div>
    )
}

export default Table

