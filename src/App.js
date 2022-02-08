import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
