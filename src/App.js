import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, test} from "./redux/CounterSlice";

function App() {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>The Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(test({testValue: 42}))}> test</button>
        </div>
    );
}

export default App;
