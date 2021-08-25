import axios from "axios";

// eslint-disable-next-line no-undef
export const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;

export  const gitUserNoticeList=async  (id)=>{
    let response =axios.get(`${API_KEY}noticelist/${id}`);
    let list= (await response).data.noticeList;
    return list;
};
export  const createUserNoticeList=async  (noticeList)=>{
    let response =axios.post(`${API_KEY}noticelist/`,noticeList); 
    let id=  (await response).data.id;

    return id;
};
export const addNotice=(noticeListCopy)=>{
        
    let id=localStorage.getItem("id");
    axios.put(`${API_KEY}noticelist/${id}`,
        {
            
            "noticeList":noticeListCopy
        }
    );
        
        
};
export const updateApiData=(noticeListCopy)=>{
        
    let id=localStorage.getItem("id");
    axios.put(`${API_KEY}noticelist/${id}`,
        {   
            "noticeList":noticeListCopy
        }
    );
       
};