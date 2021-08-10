import { Badge, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import Modal from 'antd/lib/modal/Modal';
import React, { useState,useContext } from 'react';
import calendarContext from '../Context/Context';

const AddNoticeModal = ({noticeDayDate ,isModalVisible,setIsModalVisible}) => {
    const [title,setTitle]=useState("");
    const [color,setColor]=useState("yellow");
    const contextData = useContext(calendarContext);

  
    const handlModaleOk = () => {
        
        setIsModalVisible(false);
        if(title!=""){
            let noticeListCopy=[...contextData.noticeList.noticeList];
            let exsistDayIndex=0;
            let exsistDay=false;
            noticeListCopy.forEach((day,key)=>{
                if(day.date.isSame(noticeDayDate,'day')){ 
                    exsistDay=true;
                    exsistDayIndex=key;
                    return;
                }

            });
            if(!exsistDay){      
                let notice= {
                    date:noticeDayDate,
                    notice:[
                        { color: color, content: title }
                    ]
                };
                noticeListCopy.push(notice);
                contextData.setNoticeList.setNoticeList(noticeListCopy);
            }else{
          
                let notice={ color: color, content: title };
                noticeListCopy[exsistDayIndex].notice.push(notice);
            }
      
        } 
        setTitle("");
    };
      

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setTitle("");
        
    };
      
    function onSelectChange(value) {
        setColor(value);
    }

    return (
        <>
            <Modal  title="Add Notice" visible={isModalVisible} onOk={handlModaleOk} onCancel={handleModalCancel}>
                <div >
                    <label>Title     </label>
                    <Input style={{width:'400px',marginLeft:"8px"}} placeholder="Title" value={title}onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <label>Color      </label>
                <Select
            
                    style={{ width: 200 }}
                    placeholder="select color"
                    onChange={onSelectChange}
                    preserve={false}
                    defaultValue="yellow"
                    value={color}
                >
          
                    <Option value="yellow"><Badge status={"yellow"} className="cellEvent"/>yellow</Option>
                    <Option value="green"><Badge status={"green"} className="cellEvent"/>green</Option>
                    <Option value="red"><Badge status={"red"} className="cellEvent"/>red</Option>
                </Select>

            </Modal>
        </>
    );
};

export default AddNoticeModal;
