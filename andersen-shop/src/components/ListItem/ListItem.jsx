import React,{useState,useEffect} from 'react';

export const ListItem=()=> {
  const [listItem,setListItem]=useState([]);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then((data)=>setListItem(data))
  }, [])
  
  console.log(listItem)
    
  return (
      <>
      <h2>{listItem[0].title}</h2>
      <img src={listItem[0].images[0]} alt="" />
      </>
    )
}
