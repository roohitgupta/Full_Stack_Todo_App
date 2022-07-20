import React, { useState } from "react";
import styles from "./addTask.module.css";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";


const AddTask = (props) => {
  
  const [text, setText] = useState('');

  const Container = styled.div`
    width: 70%;
    border: 1px solid black;
    margin: auto;
  `

  return (
    <Container >
      <input data-testid="add-task-input" onKeyPress={(e) => {
        if (e.key === "Enter") {
            props.setDataProps(text)
        }
    }}
    className={styles.InputBar} onChange={(e) => {

        setText(e.target.value)

      }} type="text" placeholder="Enter TODO here"/>
      <button data-testid="add-task-button" style={{fontSize:"20px", backgroundColor:"lightpink"}} onClick={()=>{ props.setDataProps(text) }}><FaPlus /></button>
    </Container>
      );
      
};

export default AddTask;
