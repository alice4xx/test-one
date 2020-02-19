import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import Info from './Info';
import './App.css';
import ContextSample from './ContextSample';
import Counter from './Counter';
import Average from './Average';
import Hello from './Hello';
import Wrapper from './Wrapper';
// import InputSample from './InputSample';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/ToDoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoItem />
        <TodoCreate></TodoCreate>
        <TodoList />
      </TodoTemplate>
    </>
  );
}

// const App =()=>{

//   return(
//   <>
//   <Wrapper>
//   <InputSample/>
//  </Wrapper>
//   </>
//  ) }

// import React from 'react';
// import InputSample from './InputSample';

// function App() {
//   return (
//     <InputSample />
//   );
// }

// function App() {
//   const [inputs, setInputs]= useState({
//     username:"",
//     email:""
//   });
//   const {username, email} =inputs;

//   const onChange = e=>{
//   const { name, value}= e.target;

//   setInputs({
//     ...inputs,
//     [name]:value
//   })
//   // console.log(name,value)
// }
// //<!-- data -->
//   const [users, setUsers] =useState( [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ]);

//   const nextId = useRef(4);//지금 있는 리스트에서 4번째에 들어간다는 뜻

//   const onCreate = () => {
//     const user ={
//       id : nextId.current,
//       username,
//       email
//     }
//     setUsers ([...users,user])
//     // console.log("user", user)
//     // console.log("users", users)
//     setInputs({
//       username :"",
//       email:""
//     })
//     nextId.current += 1;
//     // console.log("ref는어딧지", nextId.current)
//     };
//   return (
//     <>
//     <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
//   <UserList users={users}/>
//   </>
//   );
// }

// const App =()=>{
//   const [visible, setVisible]=useState(false)
// return(
//   <div>
//     <button onClick={()=>{setVisible(!visible)}}>
//       {visible? '숨기기':'보이기'}
//     </button>
//     <hr/>
//     {visible && <Info/>}
//   </div>

//   ) }
export default App;
