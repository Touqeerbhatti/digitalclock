import React, { useState } from "react";
import "./index.css";


const Time = ()=>{

    let d= new Date().toLocaleTimeString();
   const [time,updatetime]=useState(d); 


   const btntime= () =>{
    let update= new Date().toLocaleTimeString();
        updatetime(update);
   };

   setInterval(btntime,1000);
return(    
<div className="card2">
<h1  className="heading2"> {time}</h1>

</div>
); 
};
export default Time;