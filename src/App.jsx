import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
