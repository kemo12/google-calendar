/* eslint-disable no-undef */
import {  Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React,{useContext} from 'react';
import calendarContext from '../Context/Context';
import history from '../react-router/history';

const AllTasksModal = ({isModalVisible,setIsModalVisible}) => {

    const contextData = useContext(calendarContext);

    const handleOk = () => {
        setIsModalVisible(false);
        history.push('/');

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
        noticeList?.forEach((day)=>{
            let key=1;
            day.notice.forEach((dayNotices)=>{
                let noticeData={
                    key:key,
                    Notice:dayNotices.content,
                    Date:day.date.format("DD-MM-YYYY")
                };
                note.push(noticeData);
                key++;
            });
  
        });
        return note;
    };

    const data = getData(contextData.noticeList.noticeList);
    

    return (
        <>
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
        </>
    );
};

export default AllTasksModal;
