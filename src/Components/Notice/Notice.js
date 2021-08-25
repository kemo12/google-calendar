import { Badge, Input } from 'antd';
import moment from 'moment';
import React, { useContext,useState } from 'react';
import { useDrag } from 'react-dnd';
import { updateApiData } from '../Api/Api';
import calendarContext from '../Context/Context';
import { ItemTypes } from '../Table/DragType';

const Notice = ({noteData,NoticeKey,selectdayOnClick,dayCellDate}) => {
    const [isUpdate,setIsUpdate]=useState(false);
    const contextData = useContext(calendarContext);


    const draggedDetails={
        date:dayCellDate,
        index:NoticeKey,
        content:noteData
    };
    
    const [{ isDragging },drag] = useDrag(() => ({
        type: ItemTypes.notice,
        item:draggedDetails,
        
        
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    const handleDeleteNotice=(e)=>{

        let noticeListCopy=[...contextData.noticeList.noticeList];
        noticeListCopy.forEach((day)=>{
            if(moment(day.date, "MM-DD-YYYY").isSame(contextData.Date.Date,'day')){
                day.notice.forEach((notice,i)=>{
                    if(parseInt(e.target.id)===i){
                        day.notice.splice(i, 1);
                        contextData.setNoticeList.setNoticeList(noticeListCopy); 
                    }
                }); 
            }

        });
        updateApiData(noticeListCopy);
    };
    const handleUpdateNotice=(e)=>{
        let noticeListCopy=[...contextData.noticeList.noticeList];
        noticeListCopy.forEach((day)=>{
            if(moment(day.date,"MM-DD-YYYY").isSame(contextData.Date.Date,'day')){
                day.notice.forEach((notice,i)=>{
                    if(parseInt(NoticeKey)===i){
                        notice.content=e.target.value;
                        contextData.setNoticeList.setNoticeList(noticeListCopy);
                        setIsUpdate(false);
                    }
                }); 
            }

        });
        updateApiData(noticeListCopy);

    };
    return (
        <div>
            { 
                <li  
                    ref={drag}
                    style={{opacity: isDragging ? 0.5 : 1,cursor: 'move'}}
                    key={NoticeKey}  className=" noticeLi notice cellEvent"  
                >
                    <div className="noteContainer"  >
                        <div >
                            <Badge status={noteData.color} id={NoticeKey} /> 
                        </div>
                        {isUpdate?
                            <Input 
                                defaultValue={noteData.content}
                                autoFocus  
                                onPressEnter={handleUpdateNotice} 
                                onBlur={handleUpdateNotice}
                            />
                            :
                            <p 
                                onDoubleClick={()=>setIsUpdate(true)} 
                                id={NoticeKey} 
                                className="badgeP"
                            >{noteData.content}</p>
                        }
                    </div>
                    <div 
                        className={"delete"}  
                        id={NoticeKey} 
                        onMouseDown={()=>selectdayOnClick(dayCellDate)} 
                        onMouseUp={handleDeleteNotice} 
                    >x</div>
                </li>  
            }
        </div>
    );
};

export default Notice;
