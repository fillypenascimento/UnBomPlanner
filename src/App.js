import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
