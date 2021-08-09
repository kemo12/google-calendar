import { Badge, Input } from 'antd';
import React, { useContext,useState } from 'react';
import { useDrag } from 'react-dnd';
import calendarContext from '../Context/Context';
import { ItemTypes } from './DragType';

const Notice = ({noticeList,setNoticeList,item,index,selectday,Value}) => {

    const value = useContext(calendarContext);
    const draggedDetails={date:Value,index:index,content:item};
    const [isUpdate,setIsUpdate]=useState(false);
    
    const [{ isDragging },drag] = useDrag(() => ({
        type: ItemTypes.notice,
        item:draggedDetails,
        
        
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    const handleDeleteNotice=(e)=>{

        let noticeListCopy=[...noticeList];
        noticeListCopy.map((day)=>{
            if(day.date.isSame(value.Date.Date,'year')&&day.date.isSame(value.Date.Date,'day')&&day.date.isSame(value.Date.Date, 'month')){
                day.notice.map((notice,i)=>{
                    if(parseInt(e.target.id)===i){
                        day.notice.splice(i, 1);
                        setNoticeList(noticeListCopy); 
                    }
                }); 
            }

        });
    };
    const handleUpdateNotice=(e)=>{
        let noticeListCopy=[...noticeList];
        noticeListCopy.map((day)=>{
            if(day.date.isSame(value.Date.Date,'year')&&day.date.isSame(value.Date.Date,'day')&&day.date.isSame(value.Date.Date, 'month')){
                day.notice.map((notice,i)=>{
                    if(parseInt(index)===i){
                        console.log(e.target.value);
                        notice.content=e.target.value;
                        setNoticeList(noticeListCopy);
                        setIsUpdate(false);
                    }
                }); 
            }

        });

    };
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
                    {isUpdate?
                        <Input defaultValue={item.content} autoFocus  onPressEnter={handleUpdateNotice} onBlur={handleUpdateNotice}/>
                        :
                        <p onDoubleClick={()=>setIsUpdate(true)} id={index}  className="badgeP">{item.content}</p>
                    }
                </div>
                <div className={"delete"}  id={index} onMouseDown={()=>selectday(Value)} onMouseUp={handleDeleteNotice} >x</div>
            </li>  }
        </div>
    );
};

export default Notice;
