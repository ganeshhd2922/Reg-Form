import React, { useEffect, useState } from 'react'

export default function Form() {
    const data = {name:"", email:"", password:""}
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData,  [e.target.name]:e.target.value});
        console.log(inputData);
    }
    function handleSubmit(e){
       e.preventDefault();
       if(!inputData.name || !inputData.email || !inputData.password){
        alert("All field are Mandatory");
       }
       else{
        setFlag(true);
       }
    }
  return (
    <>
    <pre>
        {(flag)? <h2 class="ui-define">Hello {inputData.name}, You've Registered Successfully</h2>:"" }
    </pre>
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" onChange={handleData} value={inputData.name} placeholder='Enter Your Name' name='name' />
      </div>
      <div>
        <input type="text" onChange={handleData} value={inputData.email} placeholder='Enter Your Email' name='email' />
      </div>
      <div>
        <input type="password" onChange={handleData} value={inputData.password} placeholder='Enter Your Password' name='password' />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    </>
  )
}
