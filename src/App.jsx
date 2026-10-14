import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function tambah() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function kurang() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="m-4 bg-blue-200 p-4 rounded-xl">
      <h1 className="text-3xl font-bold text-blue-800">Counter</h1>
      <p className="my-4 text-lg">
        Count : <b>{count}</b>
      </p>
      <div className="flex gap-3">
        <button
          className="bg-blue-600 text-white p-2.5 rounded-md cursor-pointer hover:bg-blue-700 transition"
          onClick={tambah}
        >
          Tambah 1
        </button>
        <button
          className="border-blue-600 border text-blue-600 p-2.5 rounded-md cursor-pointer hover:bg-blue-700 hover:text-white transition"
          onClick={kurang}
        >
          Kurang 1
        </button>
      </div>
    </div>
  );
}
