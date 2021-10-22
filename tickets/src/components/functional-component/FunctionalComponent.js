import React from 'react';

const FunctionalComponent = ({hello, setName , showMessage}) => {
  
    const handleName = () => setName("Tamara");

    return (
        <div>
        <h1>Welcome {hello}</h1>
        <button onClick= {showMessage}>Show Messagge</button>
        <button onClick= {handleName}>Change Name</button>
        </div>
    )
};

export default FunctionalComponent;