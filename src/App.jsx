import React, { useCallback, useMemo, useState } from 'react'
import Input from "./components/Input";

const App = () => {

  const [isDark, setIsDark] = useState(false);

  const sendMessage = useMemo(() => {
    console.log('send');
  }, []);

  const count = useMemo(() => {
    console.log('count');
    return 10 * 10;
  }, []);

  console.log('app is rerender');

  return (
    <div className="p-40">
      <div className="h-auto flex  gap-3">
        <h1>{count}</h1>
        <Input type='text' sendMessage={sendMessage} />
        <button onClick={() => setIsDark(pre => !pre)}>Toggle Dark</button>
      </div>
    </div>
  )
}

export default App;