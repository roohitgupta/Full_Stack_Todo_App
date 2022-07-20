import React, { useState } from "react";
import styles from "./task.module.css";
// import Counter from "../Counter/Counter"
import AddTask from "../AddTask/AddTask"
// import CountdownTimer from '../Timer/CountdownTimer'
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const Task = () => {

  const [todoList, setTodoList] = useState([]);

  const setData = (todo) => {
    setTodoList([...todoList, todo])
  }

  const Container = styled.div`
    border: 2px solid black;
    width: 400px;
    height: 500px;
    background-color: #74f4cf;
    padding: 15px;
    margin: auto;
    width: 70%;
  `

   const Container2 = styled.div`
   border: 1px solid black;
   background-color: whitesmoke;
   width: 90%;
   margin: auto;

 `
   const Li = styled.li`
     display: flex;
     justify-content: center;
     margin: 10px;
     font-size: 25px;
     align-items: center;
     border: 1px dotted black;

 `

 

 const deleteItem = (ind) => {
   return setTodoList(
     todoList.filter((i)=>{
       return i !== ind;
     })
   )
 };


 const THREE_DAYS_IN_MS = 1 * 1 * 15 * 15 * 1000;
 const NOW_IN_MS = new Date().getTime();
 const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


  return (
    <Container>
      <AddTask setDataProps={setData} />
      <Container2 data-testid="task-text">
        {todoList.map((e) => (
          <Li data-testid="task" key={e.id} className={styles.task} >
            <input type="checkbox" style={{margin:"15px"}} data-testid="task-checkbox" />
            <div>{e}</div>
            {/* <Counter /> */}
            {/* <CountdownTimer targetDate={dateTimeAfterThreeDays}  /> */}
            <button data-testid="task-remove-button" style={{fontSize:"large", border:"none"}} onClick={() => deleteItem(e)}><FaTrash/></button>
          </Li>
          ))}
      </Container2>
    </Container>
  );
};

export default Task;
