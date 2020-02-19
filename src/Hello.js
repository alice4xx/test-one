import React from 'react';

function Hello(props) {
  return (
  <div style={{ color: props.color }}>{props.isRendering && (<b>메롱메롱</b>)}안녕하세요 {props.helloBeautiful}</div>)
}

Hello.defaultProps ={
 helloBeautiful :'뭐야',
 color :'lightgreen',
 fontSize:'30px'
  
}

export default Hello;