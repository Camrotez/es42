import UseCount from "./UseCount";
function Count(){
    const {count,onIncrement, onDecrement, reset} = UseCount()
    return(
        <div>
            <h1>the count is:{count}</h1>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Count