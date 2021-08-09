/* eslint-disable no-undef */
import {  Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import history from '../react-router/history';

const AllTasks = ({isModalVisible,setIsModalVisible,noticeList}) => {

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/');
    };

    const columns = [
        {
            title: 'Notice',
            dataIndex: 'Notice',
            key: 'Notice',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
        }    
    ];

    const getData=(noticeList)=>{
        let note=[];
        noticeList?.map((day)=>{
            let key=1;
            day.notice.map((dayNotices)=>{
                let noticeData={key:key,Notice:dayNotices.content,Date:day.date.format("DD-MM-YYYY")};
                note.push(noticeData);
                key++;
            });
  
        });
        return note;
    };

    const data = getData(noticeList);
    

    return (
        <>
            <Modal title="All Notices" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                <Table columns={columns} dataSource={data}  pagination={{ pageSize: 4 }} />
            </Modal>
        </>
    );
};

export default AllTasks;
