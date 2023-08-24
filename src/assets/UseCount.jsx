import { useState, useCallback } from "react";

function UseCount(){
    const [count,setCount]= useState(0)
    const increment = useCallback(function increment(){
        setCount((c) => c + 1)
    },[])
    const decrement = useCallback(function increment(){
        setCount((c) => c - 1)
    },[])
    const reset = useCallback(function increment(){
        setCount(0)
    },[])
    
    return {
        count: count,
        onIncrement: increment,
        onDecrement: decrement,
        reset: reset
    }
}
export default UseCount