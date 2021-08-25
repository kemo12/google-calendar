/* eslint-disable no-undef */
import {  Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React,{useContext} from 'react';
import calendarContext from '../Context/Context';
import history from '../react-router/history';

const AllTasksModal = ({isModalVisible,setIsModalVisible}) => {

    const contextData = useContext(calendarContext);

    const handleOk = () => {
        setIsModalVisible(!isModalVisible);
        history.push('/');

    };
    const handleCancel = () => {
        setIsModalVisible(!isModalVisible);
        history.push('/');
    };

    const columns = [
        {
            title: 'Notice',
            dataIndex: 'Notice',
            key: 'Notice',
        },
        {
            title: 'Date(MM/DD/YYYY)',
            dataIndex: 'Date',
            key: 'Date',
        }    
    ];

    const getData=(noticeList)=>{
        let note=[];
        noticeList?.forEach((day,x)=>{
            day.notice.forEach((dayNotices,i)=>{
                let noticeData={
                    key:i+""+x,
                    Notice:dayNotices.content,
                    Date:day.date
                };
                note.push(noticeData);
            });
  
        });
        return note;
    };

    const data = getData(contextData.noticeList.noticeList);
    

    return (
        
        <Modal 
            title="All Notices" 
            visible={isModalVisible}
            onOk={handleOk} 
            onCancel={handleCancel}
            destroyOnClose={true}
        >
            <Table 
                columns={columns}
                dataSource={data}  
                pagination={{ pageSize: 4 }}
            />
        </Modal>
        
    );
};

export default AllTasksModal;
