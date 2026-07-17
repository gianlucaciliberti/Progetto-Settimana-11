import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { useState } from "react";

function App(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="d-flex app-container">
        <button className="hamburger-btn d-md-none" onClick={()=> setMenuOpen(true)}>☰</button> 
        <Sidebar menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}/>
        <main className="flex-grow-1 content-area">
          <Routes>
            <Route 
              path="/"
              element={<HomePage />}
            />

            <Route 
              path="/search"
              element={<SearchPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App;
