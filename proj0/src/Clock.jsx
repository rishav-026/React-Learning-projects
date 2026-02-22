// import React from 'react'
// import { useState ,useEffect } from 'react'

// const Clock=()=>{
//     const [time,setTime] = useState(new Date());

//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setTime(new Date());
//         } , 1000);

//         //cleanup function
//         return ()=>{
//             clearInterval(interval);
//         };
//     },[]);


//     return (
//         <div>
//             <h1>Current Time:</h1>
//             <h2>{time.toLocaleTimeString()}</h2>
//         </div>
//     )

// };

// export default Clock;




import React, { useState, useEffect } from 'react';
 
const Clock =()=>{
    const  [count,setCount] = useState(0);


    useEffect(()=>{
        if(count%2 === 0){
            document.body.style.backgroundColor = "lightblue";
        }
        else{
            document.body.style.backgroundColor = "lightcoral";
        }

        return()=>{
            document.body.style.backgroundColor ="white";
        };
    },[count]);

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increase Count</button>
        </div>

    );
};

export default Clock;