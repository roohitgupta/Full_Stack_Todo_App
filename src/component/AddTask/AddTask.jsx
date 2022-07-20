import React, { useState } from "react";
import styles from "./addTask.module.css";
import { FaPlus } from "react-icons/fa";




const AddTask = (props) => {
  
  const [text, setText] = useState('');

  

  return (
    <div className="container" >
      <input onKeyPress={(e) => {
        if (e.key === "Enter") {
            props.setDataProps(text)
        }
    }}
    className={styles.InputBar} onChange={(e) => {

        setText(e.target.value)

      }} type="text" placeholder="Enter TODO here"/>

      <button style={{fontSize:"20px", backgroundColor:"lightpink"}} onClick={()=>{ props.setDataProps(text) }}><FaPlus /></button>
    </div>
      );
      
};

export default AddTask;