import { useState, useEffect } from "react";

export default function Joker() {

    const url = "https://api.chucknorris.io/jokes/random"

    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setJoke(data.value);
    }

    useEffect(() => {
        fetchJoke();
    }
, []);
    return (
        <>
            <h1>Joke Generator</h1>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Get Joke</button>
        </>
    )
}
