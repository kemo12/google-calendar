import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './DragType'
import Notice from './Notice'

const NoticeList = ({showAddModal,listData,noticeList,setNoticeList,selectday,Value}) => {

    const [{isOver},drop]=useDrop({
        accept: ItemTypes.notice,
  // eslint-disable-next-line no-unused-vars
        drop:(item,monitor)=>moveNotice(item),
        collect:monitor =>({
          isOver:!!monitor.isOver(),
        })
  })
  const moveNotice=(item)=>{
        let noticeListCopy=[...noticeList];
        let exsistDayIndex=0;
        let exsistDay=false;

         noticeListCopy.map((day,key)=>{
          if(day.date.isSame(Value,'year')&&day.date.isSame(Value,'day')&&day.date.isSame(Value, 'month')){ 
            exsistDay=true
            exsistDayIndex=key;
            return
          }
        })
        if(!exsistDay){    
        let notice= {
          date:Value,
          notice:[
            { color: item.content.color, content: item.content.content }
          ]
        }
        noticeListCopy.push(notice);
      }else{
        
        let notice={ color: item.content.color, content: item.content.content  };
        noticeListCopy[exsistDayIndex].notice.push(notice)
      }

      //delete the notice from the last position
        noticeListCopy.map((day)=>{
            if(day.date.isSame(item.date,'year')&&day.date.isSame(item.date,'day')&&day.date.isSame(item.date, 'month')){
           day.notice.map((notice,i)=>{
           if(item.index===i){
            day.notice.splice(i, 1)
              setNoticeList(noticeListCopy) 
           }
          }) 
          }

      })

  }

    return (
        <div>
           <ul className="events" key={Value}  ref={drop} style={isOver? ({ backgroundColor:"#bbe5f7"}) : ({})}>
            {listData.map((item,index) => {
              return(
            <div key={index} >
             <Notice  noticeList={noticeList} selectday={selectday} key={{index}} item={item} index={index} Value={Value} setNoticeList={setNoticeList} /> 
            </div>
                    )
            })}
              <li className="add cellEvent" onClick={showAddModal} >
              <PlusOutlined/>ADD 
              </li>          
          </ul> 
        </div>
    )
}

export default NoticeList
