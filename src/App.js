import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]; 
function App(){
  const [step,setStep]=useState(1)
  const [isOpen,setOpen]=useState(true)

  const incrementStep= ()=>(
      (step<3)? setStep((Number(step)+1)): ''
  )
  const desincrementStep= ()=>(
      (step>1)? setStep((Number(step)-1)): ''
  )
  return(
    <div>
      <div className="close" onClick={()=>(setOpen(!isOpen))}>&times;</div>
  { isOpen && (<div className="steps">
    <div className="numbers">
        <div className={`${step==1 ?'active':""}`}>
          1
        </div>
        <div className={`${step==2 ?'active':""}`}>
          2
        </div>
        <div className={`${step==3 ?'active':""}`}>
          3
        </div>
    </div>
    <p className="message">step {step}: {messages[step-1]}</p>
    <div className="buttons">
      <button style={{backgroundColor:'#7950F2',color:'#fff'}} onClick={desincrementStep} >Previous</button>
      <button style={{backgroundColor:'#7950F2',color:'#fff'}} onClick={incrementStep}>Next</button>
    </div>
  </div>)}
  </div>
  )
}
export default App;