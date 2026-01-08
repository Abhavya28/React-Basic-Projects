//To learn how to update objects and arrays in React.

import {useState} from "react";
export default function LudoBoard(){
    const [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});
    const [arr,setArr] = useState(["No moves"]);
    let updateBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves )=>{
            return {...prevMoves,blue:prevMoves.blue+1};
        });
        setArr((prevArr)=>{
            return [...prevArr,"Blue moves"];
        })
    };
    let updateYellow = () =>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves )=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
        setArr((prevArr)=>{
            return [...prevArr,"Yellow moves"];
        })
    };
    let updateGreen = () =>{
        console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves )=>{
            return {...prevMoves,green:prevMoves.green+1};
        });
        setArr((prevArr)=>{
            return [...prevArr,"Green moves"];
        })
    };
    let updateRed = () =>{
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves )=>{
            return {...prevMoves,red:prevMoves.red+1};
        });
        setArr((prevArr)=>{
            return [...prevArr,"Red moves"];
        })
    };
    return(
        <>
        <p>Game Begins!</p>
        <br/>
        <p>{arr}</p>
        <div className = "board">
            <p>Count = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Count = {moves.yellow} </p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Count = {moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>Count = {moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
        </>
    );
}