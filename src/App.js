import './App.css';
// import Registration from "./pages/Registration/Registration";
// import Login from "./pages/Login/Login"
import DocumentEditor from "./components/DocumentEditor/DocumentEditor"
import Dashboard from "./pages/Dashboard/Dashboard"
import DocumentPage from './pages/DocumentPage/DocumentPage';
import PrivateRoutes from './PrivateRoutes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
// import {Fragment} from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 비공개 라우트 */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents/:id" element={<DocumentPage />} />
        </Route>
        {/* 공개 라우트 */}
        <Route path="/" element={<DocumentEditor />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
