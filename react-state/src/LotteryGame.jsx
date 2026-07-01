import { useState } from "react";

export default function LotteryGame() {

    let [ticketNumber, setTicketNumber] = useState(0);

    let generateNumber = () => {
        setTicketNumber(Math.floor(Math.random() * 900) + 100);
    }
    let sumOfDigits = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    return (
        <div>
            <h2>Welcome to the Game</h2>
            <p>Generate the ticket by clicking the button below:-</p>
            <button onClick={() => generateNumber()}>Generate</button>
            <br></br>
            <h3>Your Ticket Number is: {ticketNumber}</h3>
            {sumOfDigits(ticketNumber) > 15 ? <p>Congo! You won!</p> : <p>Sorry, try again!</p>}
        </div>
    )
}
