// src/dev/App.tsx
import { Comments } from "../lib";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>React Comments Library - Dev Playground</h1>

      <div style={{ marginTop: "2rem" }}>
        <Comments>
          <p>Your library is working! Start building...</p>
        </Comments>
      </div>
    </div>
  );
}

export default App;
