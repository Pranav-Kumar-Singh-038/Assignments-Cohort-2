import { useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const incrementHandler = useCallback(function () {
        let value = count + 1;
        setCount(value)
        return []
    }, [count])

    const decrementHandler = useCallback(function () {
        let value = count-1;
        setCount(value)
        return [];
    }, [count])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={incrementHandler} onDecrement={decrementHandler} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
