import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
export default function Counter() {
  const [clickCount, setClickCount] = useState(0);
  
useEffect(() => {
  document.addEventListener('mousedown', increment);  
return () =>{
    document.removeEventListener('mousedown', increment);
 }
})
 const navigate = useNavigate();
  // your code here
const increment = () =>
  setClickCount((prev)=> prev + 1);

  return (
    <>
    <h1>Document Clicks: {clickCount}</h1>
    <button onClick={()=>{ navigate("/login")}}>
      Click me
    </button>
    </>
      
  );
}
