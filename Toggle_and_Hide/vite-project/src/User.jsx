import { useState } from 'react';

function User() {
  const [fruit, setFruit] = useState(true);

  return (
    <div>
      <button onClick={() => setFruit(!fruit)}>Change</button>
      { fruit ? <h1>Banana</h1> : <h1>Apple</h1> }
    </div>
  );
}

export default User;
