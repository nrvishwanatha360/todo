import Navbar from './navbar';
import './App.css';
import Add from './Append';
import List from './List';
import { useState } from 'react';

function App() {
  // getting title and details from the Append component
 let [content,changeContent]=useState({title:"", detail: " "});
  let getAdd=(content)=>{
    changeContent({title: content.title,detail:content.detail});
  }
  return (
    <>
    <Navbar title="todo"/>
    <Add  callback={getAdd }/>
    <List values={content}/>
    </>
      
      );
}

export default App;
