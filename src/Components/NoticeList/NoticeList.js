import { PlusOutlined } from '@ant-design/icons';
import React,{useContext} from 'react';
import { useDrop } from 'react-dnd';
import calendarContext from '../Context/Context';
import { ItemTypes } from '../Table/DragType';
import Notice from '../Notice/Notice';

const NoticeList = ({showAddNoticeModal,dayCellNotices,selectdayOnClick,dayCellDate}) => {
    const contextData = useContext(calendarContext);

    const [{isOver},drop]=useDrop({
        accept: ItemTypes.notice,
        // eslint-disable-next-line no-unused-vars
        drop:(item,monitor)=>moveNotice(item),
        collect:monitor =>({
            isOver:!!monitor.isOver(),
        })
    });
    
    const moveNotice=(item)=>{
        let noticeListCopy=[...contextData.noticeList.noticeList];
        let exsistDayIndex=0;
        let exsistDay=false;

        noticeListCopy.forEach((day,key)=>{
            if(day.date.isSame(dayCellDate,'day')){ 
                exsistDay=true;
                exsistDayIndex=key;
                return;
            }
        });
        if(!exsistDay){    
            let notice= {
                date:dayCellDate,
                notice:[
                    { color: item.content.color, content: item.content.content }
                ]
            };
            noticeListCopy.push(notice);
        }else{
        
            let notice={ color: item.content.color, content: item.content.content  };
            noticeListCopy[exsistDayIndex].notice.push(notice);
        }

        //delete the notice from the last position
        noticeListCopy.forEach((day)=>{
            if(day.date.isSame(item.date,'day')){
                day.notice.forEach((notice,i)=>{
                    if(item.index===i){
                        day.notice.splice(i, 1);
                        contextData.setNoticeList.setNoticeList(noticeListCopy); 
                    }
                }); 
            }

        });

    };

    return (
        <div>
            <ul 
                className="events" 
                key={dayCellDate}  
                ref={drop} 
                style={isOver? ({ backgroundColor:"#bbe5f7"}) : ({})}
            >
                {dayCellNotices?.map((note,index) => {
                    return(
                        <div key={index} >
                            <Notice  
                                selectdayOnClick={selectdayOnClick}
                                noteData={note} 
                                NoticeKey={index} 
                                dayCellDate={dayCellDate} 
                            /> 
                        </div>
                    );
                })}
                <li className="add cellEvent" onClick={showAddNoticeModal} >
                    <PlusOutlined/>ADD 
                </li>          
            </ul> 
        </div>
    );
};

export default NoticeList;
