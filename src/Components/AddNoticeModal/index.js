/* eslint-disable react/prop-types */
import { PlusOutlined } from '@ant-design/icons';
import { Badge, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';


const AddNoticeModal = ({value ,noticeList ,setNoticeList}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title,setTitle]=useState("");
    const [color,setColor]=useState("");
    const showModal = () => {
        setIsModalVisible(true);
      };
      const handlModaleOk = () => {
          console.log({get: noticeList, set: setNoticeList  })
        setIsModalVisible(false);
           let noticeListCopy=[...noticeList];
            let notice= {
            date:value,
            notice:[
              { color: color, content: title }
             ]
          }
         noticeListCopy.push(notice);
          setNoticeList(noticeListCopy)

      };
      

      const handleModalCancel = () => {
        setIsModalVisible(false);
        setTitle("")
        
      };
      
      function onSelectChange(value) {
          setColor(value)
      }

    return (
        <>
        <li  className="add cellEvent" onClick={showModal}>
        <PlusOutlined/>ADD 
        </li>
        <Modal  title="Add Notice" visible={isModalVisible} onOk={handlModaleOk} onCancel={handleModalCancel}>
        <Input placeholder="Title" value={title}onChange={(e)=>setTitle(e.target.value)} />
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="select color"
            onChange={onSelectChange}
            preserve={false}
        >
            <Option value="warning"><Badge status={"warning"} className="cellEvent"/>yellow</Option>
            <Option value="success"><Badge status={"success"} className="cellEvent"/>green</Option>
            <Option value="error"><Badge status={"error"} className="cellEvent"/>red</Option>
        </Select>

        </Modal>
      </>
    )
}

export default AddNoticeModal
