import React from 'react'
import "./Greet.css"
function Greet({name, age, address}){
    return (
        <div className='greet'>
        <h1> hello  my name is {name}.</h1>
        <p>l am {age}  years old.</p>
        <p>l stay in {address} .</p>
        </div>

    )
}


export default Greet;