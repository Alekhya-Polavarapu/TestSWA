import React from 'react';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/hello`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
