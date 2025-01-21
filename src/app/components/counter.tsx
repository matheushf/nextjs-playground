'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(prev => prev - 1)}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}