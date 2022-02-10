import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import List from "./routes/List";
import Nav from "./components/Nav";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path="/page/:detail/:num" element={<List />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
