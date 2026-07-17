import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App(){

  return (
    <BrowserRouter>
      <div className="d-flex bg-black" style={{minHeight:"100vh"}}>
        <Sidebar />
        <main className="flex-grow-1">
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
