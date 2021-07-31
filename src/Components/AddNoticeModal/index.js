/* eslint-disable react/prop-types */
import { Badge, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

const AddNoticeModal = ({value ,noticeList ,setNoticeList,isModalVisible,setIsModalVisible}) => {
    const [title,setTitle]=useState("");
    const [color,setColor]=useState("yellow");
  
      const handlModaleOk = () => {
        
        setIsModalVisible(false);
        if(title!=""){
          let noticeListCopy=[...noticeList];
          let exsistDayIndex=0;
          let exsistDay=false;
           noticeListCopy.map((day,key)=>{
            if(day.date.isSame(value,'year')&&day.date.isSame(value,'day')&&day.date.isSame(value, 'month')){ 
              exsistDay=true
              exsistDayIndex=key;
              return
            }

          })
          if(!exsistDay){      
          let notice= {
            date:value,
            notice:[
              { color: color, content: title }
            ]
          }
          noticeListCopy.push(notice);
          setNoticeList(noticeListCopy)
        }else{
          
          let notice={ color: color, content: title };
          noticeListCopy[exsistDayIndex].notice.push(notice)
        }
      
      } 
          setTitle("")

      };
      

      const handleModalCancel = () => {
        setIsModalVisible(false);
        setTitle("")
        setColor("")
        
      };
      
      function onSelectChange(value) {
          setColor(value)
      }

    return (
        <>
        <Modal  title="Add Notice" visible={isModalVisible} onOk={handlModaleOk} onCancel={handleModalCancel}>
        <Input placeholder="Title" value={title}onChange={(e)=>setTitle(e.target.value)} />
        <Select
            
            style={{ width: 200 }}
            placeholder="select color"
            onChange={onSelectChange}
            preserve={false}
            value={color}
        >
          
            <Option value="yellow"><Badge status={"yellow"} className="cellEvent"/>yellow</Option>
            <Option value="green"><Badge status={"green"} className="cellEvent"/>green</Option>
            <Option value="red"><Badge status={"red"} className="cellEvent"/>red</Option>
        </Select>

        </Modal>
      </>
    )
}

export default AddNoticeModal
