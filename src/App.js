import Navbar from './navbar';
import './App.css';
import Add from './Add';
// import List from './List';
import { Component, useState } from 'react';

function App() {
 let [content,changeContent]=useState({title:"", detail: " "});
  let getAdd=(content)=>{
    changeContent({title : content.title, detail: content.detail});
  }
  return (
    <>
    <Navbar title="todo"/>
    <p>{Component.title} {Component.detail}</p>
    <Add  callback={getAdd }/>
    {/* <List values={content}/> */}
    </>
      
      );
}

export default App;
