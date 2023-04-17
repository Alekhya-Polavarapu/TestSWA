import React from 'react';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/hello?name=alekhya`)).json();
      setData(text);
    })();
  });

  return <div>Hello I am {data}</div>;
}

export default App;
