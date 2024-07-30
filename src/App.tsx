import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Provider } from "react-redux"; // Redux Provider のインポート
import { store } from "./store"; // Redux ストアのインポート
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import NodeManagement from "./components/pages/NodeManagement";
import TransactionHistory from "./components/pages/TransactionHistory";
import { CustomThemeProvider, useThemeContext } from "./contexts/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <IconButton 
      onClick={toggleTheme} 
      color="inherit"
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px'
      }}
    >
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Router>
          <ThemeToggleButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/node-management" element={<NodeManagement />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
          </Routes>
        </Router>
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
