import axios from "axios";

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.REACT_APP_CALENDAR_API_KEY;

export  const gitUserNoticeList = async  (id) => {
    let response = axios.get(`/noticelist/${id}`);
    let list = (await response).data.noticeList;
    return list;
};
export  const createUserNoticeList = async  (noticeList) => {
    let response = axios.post(`/noticelist/`,noticeList); 
    let id =  (await response).data.id;

    return id;
};
export const addNotice = (noticeListCopy ) => {
        
    let id = localStorage.getItem("id");
    axios.put(`/noticelist/${id}`,
        {
            
            "noticeList":noticeListCopy
        }
    );
        
        
};
export const updateApiData = (noticeListCopy) => {
        
    let id = localStorage.getItem("id");
    axios.put(`/noticelist/${id}`,
        {   
            "noticeList":noticeListCopy
        }
    );
       
};