import React, { useState, useEffect } from "react";
import "./Home.css";


function Home() {
  const getTimeBaseMessage = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good Morning,';
    } else if (hours < 18) {
      return 'Good Afternoon,';
    } else {
      return 'Good Night,';
    }
  };

  const [message, setMessage] = useState('Welcome!'); // Initialize state with a default welcome message
  const [datemessage] = useState(getTimeBaseMessage());

  // useEffect to handle side effects
  useEffect(() => {
    document.title = message;
    console.log(`Component updated with message: ${message}`);
    return () => {
      console.log('Cleanup if needed');
    };
  }, [message]); // only re-run the effect if message changes

  const handleInputChange = (event) => {
    const input = event.target.value;
    setMessage(`Welcome! ${input}`);
  };

  return (
    <div className="home">
      
      <div className="description">
        <p>Beauty is a State of Mind and Expression</p>
      </div>
      <div className="home-text">
        <h2>{datemessage} {message}</h2>
        <div className="Input">
          <input
            type="text"
            placeholder="Enter Your Welcome Message"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
