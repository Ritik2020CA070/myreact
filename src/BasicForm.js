import React, {useState} from "react";
import axios from "axios";

function BasicForm(){
  const [num, setNum] = useState('')
  
  const [output, setOutput]=useState();
  
  const handleNumChange = event => {
    setNum(event.target.value)
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    getApiData();
  };
  
  const getApiData =async () =>{
  
  const url = process.env.REACT_APP_MY_URL+num;
  console.log(url);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
    };
    
    
    
    const response=await fetch(url,requestOptions)
        .then((res) =>res.json())
        .then((data)=>setOutput(data.name))
        
 
  
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter The Number</label>
        <input
          type="number"
          name="number"
          placeholder="Enter Number"
          onChange={handleNumChange}
          value={num}
        />
      </div>
      
      <button type="submit">
        Submit
      </button>
    </form>
	
    <div>Result is Here : {output}</div>
    </div>
  )
}

export default BasicForm
