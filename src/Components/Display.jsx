import React,{useState,useEffect} from 'react'
import {Typography,Layout,Input} from 'antd'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Search from './Search'
import getApi from '../Service/Weather.service';
const Display = () => {
  const[city,setCity]=useState('Chandigarh');
  const[data,setData]=useState([])
  const[value,setValue]=useState('')
  const[day,setDay]=useState('');
  const{Title}=Typography;
  const {Header} = Layout;
  const{Search}=Input;
  useEffect(()=>{
    const getData=async()=>{
        try{
            const res=await getApi(city);
            setData(res);
        }
        catch(err){
            console.log(err);
        }
    }
    getData();
    const date=new Date();
    const d=date.getDay();
    switch(d){
        case 0:
        setDay('Sunday');
        break;
        case 1:
        setDay('Monday');
        break;
        case 2:
        setDay('Tuesday');
        break;
        case 3:
        setDay('Wednesday');
        break;
        case 4:
        setDay('Thursday');
        break;
        case 5:
        setDay('Friday');
        break;
        case 6:
        setDay('Saturday');
        break;
    }
    console.log(d);
  },[city])
  const SearchHandler=(e)=>{
    setValue(e.target.value);
  }
  return (
    <>
    {console.log(data)}
    <Layout className='layout'>
        <div id="Search">
        <Search
      placeholder="input search text"
      onSearch={value => setCity(value)}
      style={{ width: 200 }}
    />
        </div>
        <Header className='content'>
            <div >
            <Title style={{color:'white'}}level={2} >{day}</Title>
            </div>
            <div>
            <Title style={{color:'white'}}level={2} >{data.name}</Title>
            </div>
        </Header>
        <div id="tempicon">
        <Title id="temperature" style={{color:'white'}}level={3} >{Math.floor(parseInt(data.main.temp)-273)}°C</Title>
        </div>
        <div id="weathericon">
        <WbSunnyIcon fontSize={"large"}/>
        </div>
    </Layout>
    </>
  )
}
export default Display