import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();
  return (
    <div>
      Counter ({counter})
      <button className="btn btn-primary mx-1" onClick={() => increment()}>
        Increment
      </button>
      <button className="btn btn-primary mx-1" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
