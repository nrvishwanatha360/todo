import React from 'react'
import { useState } from 'react';

export default function Append(props) {
    const customStyles = {
        color: '#555555',
        fontSize: '20px',
        fontWeight: 'bold'
      };

    //   let [title,setTitle]=useState('');
    //   let [detail,setDetail]=useState('');
    let [obj,setObj]=useState({title:'',detail:''});
      const handleOnchangeTitle = (e)=>{
        setObj(prevState=>({...prevState,title : e.target.value} ));
      }

      const handleOnchangeDetail = (e)=>{

        setObj(prevState=>({...prevState,detail: e.target.value} ));
      }

      let handleonClick = ()=>{
        props.callback(obj);
      }
  return (
    <div>
         <div className="mt-2 ms-5 me-5 col-5">
        <label htmlFor="exampleFormControlTextarea2" className="form-label" style={customStyles}>Title</label>
        <textarea className="form-control required " id="exampleFormControlTextarea1" rows="1" value={obj['title']} onChange={handleOnchangeTitle} ></textarea>
        </div>

        <div className="ms-5 me-5 mt-2 ">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={customStyles}>Details</label>
        <textarea className="form-control required" id="exampleFormControlTextarea1" rows="2" value={obj.detail} onChange={handleOnchangeDetail} ></textarea>
        </div>

        <div className="ms-5 me-5 mt-2 ">
        <button type="button" className="btn btn-success" onClick={handleonClick} >SAVE</button>
        </div>

        
    </div>
  )
}
 