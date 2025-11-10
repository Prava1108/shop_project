import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";
import ItemDetails from "./pages/ItemDetails";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<LoginPage setUser={setUser} />} 
        />
        <Route 
          path="/items" 
          element={user ? <ItemsPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/item/:id" 
          element={user ? <ItemDetails /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to="/items" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
