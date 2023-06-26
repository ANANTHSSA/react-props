import React from "react";


const Child =(props)=>{
   
    let a =props.Fil;
    
    return(
        <div>
           {a.map(function(value,index){
           
            return (
                <div add={index}>
                <h1>{value.name} {value.year}</h1>
                <button  onClick={() => props.get(value.year)}>click</button>
                </div>
            ) 
            
           })}
        </div>
    )
}
export default Child;

