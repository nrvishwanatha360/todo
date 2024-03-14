import Navbar from './navbar';
import './App.css';
import List from './List';
import { useState,useEffect } from 'react';
import Append from './Append';

function App() {

   //storing the objects of contents
  let [lst,changeLst]=useState([]);

  // getting title and details from the Append component
 let [content,changeContent]=useState({title:"", detail: "", actions: ""});
  let getAdd=(content)=>{
    changeContent(prevState=>({
      ...prevState,
      ...content
    
    })
    );
  }
  // console.log(type(lst));
  useEffect(() => {
    // Check if content is not empty
    if (content.title !== "" || content.detail !== "" || content.actions !== "") {
      // Update lst state by appending the new content
      changeLst(prevLst => [...prevLst, content]);
    }
  }, [content]);
  return (
    <>
    <Navbar title="todo"/>
    <Append  callback={getAdd }/>
    <List values={lst}/>
    </>
      
      );
}

export default App;
