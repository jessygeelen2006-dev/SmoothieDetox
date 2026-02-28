import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import ThreeRecipesPage from './pages/ThreeRecipesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/3-recepten" element={<ThreeRecipesPage />} />
      </Routes>
    </Router>
  );
}
