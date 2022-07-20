import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import Task from "./Task/Task"

const Home = () => {

    const Container = styled.div`
    border: 2px solid black;
    width: 50%;
    height: 500px;
    background-color: #74f4cf;
    padding: 15px;
    margin: auto;
    `


  return (
    <Container>
      <Navbar />

      <Task />

    </Container>
  )
}

export default Home
