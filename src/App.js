import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]; 
function App(){
  const [step,setStep]=useState(1)

  const incrementStep= ()=>(
      (step<3)? setStep((Number(step)+1)): ''
  )
  const desincrementStep= ()=>(
      (step>1)? setStep((Number(step)-1)): ''
  )
  return(
  <div className="steps">
    <div className="numbers">
        <div className="active">
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
    </div>
    <p className="message">step {step}: {messages[step-1]}</p>
    <div className="buttons">
      <button style={{backgroundColor:'#7950F2',color:'#fff'}} onClick={desincrementStep} >Previous</button>
      <button style={{backgroundColor:'#7950F2',color:'#fff'}} onClick={incrementStep}>Next</button>
    </div>
  </div>
  )
}
export default App;