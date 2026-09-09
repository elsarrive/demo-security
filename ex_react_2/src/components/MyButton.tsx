import { useState } from "react";

function MyButton() {
    const [counter, increaseCounter] = useState(0);
    function handleClick() { increaseCounter(counter+1) };

    return (
        <button onClick={handleClick}>Increment : {counter}</button>
    );
};

export default MyButton