import React, { useState } from "react";
import styles from "./task.module.css";
import AddTask from "../AddTask/AddTask"
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";


const Task = () => {

  const [todoList, setTodoList] = useState([]);

  const setData = (todo) => {
    setTodoList([...todoList, todo])
  }

  const Container = styled.div`
    width: 90%;
    height: 400px;
    padding: 15px;
    margin: auto;
    `
   const Container2 = styled.div`
   border: 1px solid black;
   background-color: whitesmoke;
   width: 90%;
   margin: auto;
   margin-top: 15px; 
 `
   const Li = styled.li`
     display: flex;
     justify-content: space-between;
     margin: 10px;
     font-size: 25px;
     align-items: center;
 `
 

 const deleteItem = (ind) => {
   return setTodoList(
     todoList.filter((i)=>{
       return i !== ind;
     })
   )
 };




  return (
    <Container id="task"> 
      <AddTask setDataProps={setData} />
      <Container2>
        {todoList.map((e) => (
          <Li key={e.id} className={styles.task} >
            <input type="checkbox" style={{}} />
            <div>{e}</div>
            <button style={{fontSize:"large", border:"none"}} onClick={() => deleteItem(e)}><FaTrash/></button>
          </Li>
          ))}
      </Container2>
    </Container>
  );
};

export default Task;