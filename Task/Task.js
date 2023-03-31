import React, { useState } from 'react'
import "./Task.css";
const Task = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [Desigation, setDesignation] = useState();
    const [number, setNumber] = useState();
    const [data, setData] = useState([]);
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();

        setData(firstName,lastName,Desigation,number);
    }

    return (
        <>
            <div className="container">
                <div className="container-Body">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Your First Name' onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} />

                        <input type="text" placeholder='Enter  Your Desigation ' onChange={(e) => setDesignation(e.target.value)} />

                        <input type="text" placeholder='Enter Your Number' onChange={(e) => setNumber(e.target.value)} />

                        <button type='submit'>Submit</button>

                    </form>

                </div>
                <div className="showData">
                <span>First Name</span>
                    <h2>{data}</h2>
                
                   
                </div>

            </div>

        </>
    )
}

export default Task