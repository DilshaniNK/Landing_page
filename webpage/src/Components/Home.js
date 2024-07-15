import React,{useState,useEffect} from "react";
import image from '../assets/R.jpg';
import "./Home.css";




function Home(){
    const [message,setMessage]=useState('Welcome! ');//Initialize sate with a default welcome message
    const [input,setInput]=useState("");

    //useEffect to handle side effects
    useEffect(()=>{
        document.title=message;

        console.log(`Component updated with message : ${message}`);

        return()=>{
            console.log('Cleanup if needed');

        };
    },[message]);//only re-run the effect if message changes

    const handleInputChange =(event) =>{
        const input=event.target.value;
        
        setMessage(`Welcome!  ${input}`);

    };

    return(
        <div className="home-container">
             <img src={image} alt="Destripction of image" className="img"/>
             <div className="home-text">
             <h2>{message}</h2>
                <input  
                className="Input" 
                type="text" 
                placeholder="Enter Your Welcome Message"
                onChange={handleInputChange}/>
            </div>
            
        </div>
    );
}
export default Home;