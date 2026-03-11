import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import ThreeRecipesPage from './pages/ThreeRecipesPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/3-recepten" element={<ThreeRecipesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsPage />} />
        <Route path="/privacy-beleid" element={<PrivacyPage />} />
        <Route path="/retourbeleid" element={<RefundPage />} />
      </Routes>
    </Router>
  );
}
