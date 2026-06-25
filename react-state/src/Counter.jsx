import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let inCount = () => {
        setCount((currCount) => {
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={inCount}>Increase</button>
        </div>
    );
}