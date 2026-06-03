
import { useState, useRef } from "react";
import "./Demo.css";

function Demo(){
    let x = 0;
    const   [y,setY] = useState(0);
    const z = useRef(0);
    console.log(z);

    function handleUpdateCount(){
        x = x + 1;
        console.log(x); 
    }
    function handleY(){
        setY(y+1);
    }

    function handleZ(){
        z.current = z.current + 1 ;
    }
    
    return(
        <>
        <div className="container"></div>
        <h1>{x}</h1>
        <button className="btn" onClick={handleUpdateCount}>Increase X</button>
        <button className="btnn" onClick={handleY}>Increase Y</button>
        <h1>{y}</h1>
        <h1> Z: {z.current}</h1>
        <button onClick={handleZ}>Increase Z</button>
        </>
    );
}

export default Demo;
