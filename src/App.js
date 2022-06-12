import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Main from '../src/Pages/Main'
import Tree from '../src/Pages/Tree'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="tree" element={<Tree />} />
    </Routes>
  );
}

export default App;

