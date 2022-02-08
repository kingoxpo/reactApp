import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/movie/:id" element={<Detail />}></Route>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
