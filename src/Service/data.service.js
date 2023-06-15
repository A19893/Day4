import React,{useEffect,useState}from 'react'
import axios from "axios"
const URL="https://jsonplaceholder.typicode.com/posts/1"
export  const Service = (props) => {
    const[data,setData]=useState(null);
    useEffect(()=>{
        try{
        axios.get(URL).then((response)=>{
            setData(response.data);
        });
       }
      catch(err){
       console.log(err);
      }
    },[])
    const onClick=()=>{
      props.sendData(data);
    }
  return (
    <>
   <button onClick={onClick}>Click to get Data</button>
    </>
  )
}