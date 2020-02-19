
import React,{useState, useRef} from 'react';

function InputSample(){
const [input, setInput]=useState({
    name:"",
    nickName:""
})

// const {input, nickName}=input;

 const onChange = e=>{

 setInput({
     ...input,
     [e.target.name]:e.target.value
 })

// }
//     const onReset =()=>{
//     setInputs({
//     name: '',
//     nickname: '',
//     })}

    return(
        <div>
      <input  name="name" placeholder="이름"  />
      <input  name="nickName" placeholder="닉네임"  />
      <button >초기화</button>
      <div>
        <b>값: </b>
      
      </div>
    </div>

    )
}

export default InputSample;