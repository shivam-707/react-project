import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [arr, SetArr] = useState([""]);

    let updateBlue = () => {
        moves.blue += 1;
        setMoves((prevMoves) => {
            return {...prevMoves}
        });
        SetArr((prevArr) => [...prevArr, "blue moves"]);
    }
    let updateYellow = () => {
        moves.yellow += 1;
        setMoves((prevMoves) => {
            return {...prevMoves}
        });
        SetArr((prevArr) => [...prevArr, "yellow moves"]);
    }
    let updateGreen = () => {
        moves.green += 1;
        setMoves((prevMoves) => {
            return {...prevMoves}
        });
        SetArr((prevArr) => [...prevArr, "green moves"]);
    }
    let updateRed = () => {
        moves.red += 1;
        setMoves((prevMoves) => {
            return {...prevMoves}
        });
        SetArr((prevArr) => [...prevArr, "red moves"]);
    }

    return(
        <div>
            <h1>Ludo Board</h1>
            <p>Moves: {arr.join(", ")}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue", color: "black" }} onClick={updateBlue}>
                    +1 
                </button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green", color: "black" }} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red", color: "black" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}