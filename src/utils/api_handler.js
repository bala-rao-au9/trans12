import {message} from 'antd';
const getResources = async() => {
    try{
        let response = await( await fetch(`https://reqres.in/api/unknown`)).json();
        if(response){
            return response.data;
        }
    }catch(e){
        message.error('Something went wrong please check backend server');
    }
}

export default getResources;