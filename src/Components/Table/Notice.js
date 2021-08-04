import { Badge } from 'antd';
import React, { useContext } from 'react'
import { useDrag } from 'react-dnd';
import calendarContext from '../Context/Context';
import { ItemTypes } from './DragType';

const Notice = ({noticeList,setNoticeList,item,index,selectday,Value}) => {

    const value = useContext(calendarContext);
    const draggedDetails={date:Value,index:index,content:item};
    
    const [{ isDragging },drag] = useDrag(() => ({
        type: ItemTypes.notice,
        item:draggedDetails,
        
        
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
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
    return (
        <div>
         { <li  
                ref={drag}
                style={{opacity: isDragging ? 0.5 : 1,cursor: 'move'}}
               key={index}  className=" noticeLi notice cellEvent"  
               >
                <div className="noteContainer"  >
                <div >
                <Badge status={item.color} id={index} /> 
                </div>
                <p id={index}  className="badgeP">{item.content}</p>
                </div>
                <div className={"delete"}  id={index} onMouseDown={()=>selectday(Value)} onMouseUp={handleDeleteNotice} >x</div>
              </li>  }
        </div>
    )
}

export default Notice
