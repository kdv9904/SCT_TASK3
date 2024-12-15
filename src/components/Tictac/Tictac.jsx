import React, { useRef, useState } from 'react'
import './Tictac.css'
import cross_icon from '../Assert/cancel.jpg'
import round_icon from '../Assert/round.png'
let data=["","","","","","","","",""];

const Tictac=()=> {
  let [count,setCount]=useState(0);
  let [lock,setLock]=useState(false);
  let titleRef=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null); 
  let box3=useRef(null); 
  let box4=useRef(null); 
  let box5=useRef(null); 
  let box6=useRef(null); 
  let box7=useRef(null); 
  let box8=useRef(null); 
  let box9=useRef(null); 
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
  const toggle=(e,num)=>{
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML=`<img src='${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML=`<img src='${round_icon}'>`;
      data[num]="0";
      setCount(++count);
    }
    checkWin();
  }
  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (data[3 * i] !== "" && data[3 * i] === data[3 * i + 1] && data[3 * i + 1] === data[3 * i + 2]) {
        Won(data[3 * i]);
        return;
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (data[i] !== "" && data[i] === data[i + 3] && data[i + 3] === data[i + 6]) {
        Won(data[i]);
        return;
      }
    }
    if (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) {
      Won(data[0]);
      return;
    }
  
    if (data[2] !== "" && data[2] === data[4] && data[4] === data[6]) {
      Won(data[2]);
      return;
    }
    if (count === 9) {
      titleRef.current.innerHTML = "It's a tie!";
    }
  };
  const Won=(winner)=>{
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML="congratulations x player win";
    }
    else{
      titleRef.current.innerHTML="congratulations o player win";
    }
  };
  const reset=()=>{
    setLock(false);
    data=["","","","","","","","",""];
    titleRef.current.innerHTML= "Tic Tac Toe";
    box_array.map((e)=>{
      e.current.innerHTML="";
    }) 
  }
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes"ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes"ref={box2}onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes"ref={box3}onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes"ref={box4}onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes"ref={box5}onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes"ref={box6}onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes"ref={box7}onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes"ref={box8}onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes"ref={box9}onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset"onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}
export default Tictac;

