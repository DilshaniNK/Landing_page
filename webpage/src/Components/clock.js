import React,{useState,useEffect} from "react";


const Clock=()=> {
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);
        return () => clearInterval(intervalId);

    },[])

    return(
        <div className="clock">
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default  Clock;