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

  return <div>Hello I am {data}
  <a href="/.auth/login/aad">Login</a>
      <a href="/.auth/logout">Logout</a>
      <a href="/.auth/login/github">Login with github</a>
    <br />
    <br />
    <a href="/authenticated/">Authenticated Role page</a>
  </div>;
}

export default App;
