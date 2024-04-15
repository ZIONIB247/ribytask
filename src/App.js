import "./styles.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Agentpage from './agent/createagent';
// import Sidenavbar from './agent/sidenavbar';
import Content from "./agent/content";
// import Login from './Components/login';

// import Sidebar from './Layout/sidebar';
import Board from './Layout/board';
import BasicModal from "./agent/modal";
import Login from "./Components/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <p>This Page does not exist</p>
                <a href="/">Go Home</a>
              </div>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/content" element={<Content />} />
          <Route path="/createAgent" element={<BasicModal />} />
          <Route path="/board" element={<Board />} />
          
        </Routes>
      </BrowserRouter>
      {/* <Login />  */}

      {/* <Sidebar /> */}
      {/* <Board /> */}
      {/* <Sidenavbar /> */}
      {/* <Content />  */}
      {/* <BasicModal /> */}
      {/* <Agentpage /> */}
    </>
  );
}

export default App;
