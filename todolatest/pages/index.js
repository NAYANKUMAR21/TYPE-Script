import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>NAYAN KUMAR COUNT = {state}</h1>
      <button disabled={state >= 10} onClick={() => setState(state + 1)}>
        ADD
      </button>
      <button disabled={state <= 0} onClick={() => setState(state - 1)}>
        SUBTRACT
      </button>
    </>
  );
}
