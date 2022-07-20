import React from 'react'
import styled from 'styled-components'

const Signup = () => {
 
 const Container = styled.div`
    width: 30%;
    height: 400px;
    margin: auto;
    background-color: lightblue;
 `
 const Heading = styled.div`
    text-align: center;
    
 `
 const Foorm = styled.form`
    border: 1px solid black;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `
 const Input = styled.input`
    width: 60%;


 `
 const Button = styled.button`
    padding: 7px 14px;
    background-color: teal;
    font-size: 20px;
    

 `
 
 
    return (
    <Container>
      <Heading>
       <h2>Login Section</h2> 
      </Heading>
      <Foorm>
       
        <Heading> <h3>Email</h3> </Heading>
        <Input />
        <Heading> <h3>Password</h3> </Heading>
        <Input />
      </Foorm>
        <Button>Submit</Button>
    </Container>

)
}

export default Signup
