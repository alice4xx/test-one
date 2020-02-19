import React, {useState, useEffect, useReducer} from 'react'

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    }
}
const Info =()=>{
    const [ state, dispatch ] = useReducer (reducer, {
        name :"",
        nickname :""
    })

    const {name, nickname}= state;
    
    const onChange =(e)=>{
        dispatch(e.target)
    }
    


// const Info =()=>{
//     const [name, setName] = useState('')
//     const [nickname, setNickname] = useState('')

//     useEffect(()=>{
//     console.log('effect')
//     console.log(name)
//     return ()=>{
//         console.log('-----------clean')
//         console.log(name)
//     } 
    
//     },[name])

//     const onChange = e=>{
//         setName(e.target.value)
//     }
//     const onChangeNickName = e=>{
//         setNickname(e.target.value )   
//         }

        return(
            <div>
                <div>
                    <input name="name" value={name} onChange={onChange}></input>
                    <input name="nickname" value={nickname} onChange={onChange}/>
                </div>
                <div>
                    <b>이름 :</b> {name}
                </div>
                <div>
                <b>별명:</b>{nickname}</div>
            </div>
        )
        }

export default Info;