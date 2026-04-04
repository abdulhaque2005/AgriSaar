import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoilInput from './pages/SoilInput';
import AnalysisDashboard from './pages/AnalysisDashboard';
import CropRecommendations from './pages/CropRecommendations';
import FertilizerPlan from './pages/FertilizerPlan';
import WeatherPage from './pages/WeatherPage';
import MarketInsights from './pages/MarketInsights';
import GovernmentSchemes from './pages/GovernmentSchemes';
import FarmingCalendar from './pages/FarmingCalendar';
import SubsidyTracker from './pages/SubsidyTracker';
import BioFertilizer from './pages/BioFertilizer';
import LossRecovery from './pages/LossRecovery';
import ProfitTrees from './pages/ProfitTrees';
import DirectMarket from './pages/DirectMarket';
<<<<<<< HEAD
import DiseaseScanner from './pages/DiseaseScanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthCallback from './pages/AuthCallback';
import KisaanAIAssistant from './components/KisaanAIAssistant';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-[#f8faf8] dark:bg-[#030704] transition-colors duration-500">
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/auth/callback" element={<AuthCallback />} />

              {/* Protected Routes */}
              <Route path="/soil-input" element={<ProtectedRoute><SoilInput /></ProtectedRoute>} />
              <Route path="/analysis" element={<ProtectedRoute><AnalysisDashboard /></ProtectedRoute>} />
              <Route path="/crops" element={<ProtectedRoute><CropRecommendations /></ProtectedRoute>} />
              <Route path="/fertilizer" element={<ProtectedRoute><FertilizerPlan /></ProtectedRoute>} />
              <Route path="/weather" element={<ProtectedRoute><WeatherPage /></ProtectedRoute>} />
              <Route path="/market" element={<ProtectedRoute><MarketInsights /></ProtectedRoute>} />
              <Route path="/schemes" element={<ProtectedRoute><GovernmentSchemes /></ProtectedRoute>} />
              <Route path="/calendar" element={<ProtectedRoute><FarmingCalendar /></ProtectedRoute>} />
              <Route path="/subsidy-tracker" element={<ProtectedRoute><SubsidyTracker /></ProtectedRoute>} />
              <Route path="/recovery" element={<ProtectedRoute><LossRecovery /></ProtectedRoute>} />
              <Route path="/bio-inputs" element={<ProtectedRoute><BioFertilizer /></ProtectedRoute>} />
              <Route path="/agroforestry" element={<ProtectedRoute><ProfitTrees /></ProtectedRoute>} />
              <Route path="/b2b" element={<ProtectedRoute><DirectMarket /></ProtectedRoute>} />
              <Route path="/lens" element={<ProtectedRoute><DiseaseScanner /></ProtectedRoute>} />
            </Routes>
          </main>
          <KisaanAIAssistant />
=======

import { AgriProvider } from './context/AgriContext';
import FarmerVoiceAssistant from './components/FarmerVoiceAssistant';

function App() {
  return (
    <AgriProvider>
      <Router>
        <div className="min-h-screen bg-[#f8faf8]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soil-input" element={<SoilInput />} />
              <Route path="/analysis" element={<AnalysisDashboard />} />
              <Route path="/crops" element={<CropRecommendations />} />
              <Route path="/fertilizer" element={<FertilizerPlan />} />
              <Route path="/bio-inputs" element={<BioFertilizer />} />
              <Route path="/recovery" element={<LossRecovery />} />
              <Route path="/agroforestry" element={<ProfitTrees />} />
              <Route path="/b2b" element={<DirectMarket />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/market" element={<MarketInsights />} />
              <Route path="/schemes" element={<GovernmentSchemes />} />
              <Route path="/calendar" element={<FarmingCalendar />} />
              <Route path="/subsidy-tracker" element={<SubsidyTracker />} />
            </Routes>
          </main>
          <FarmerVoiceAssistant />
>>>>>>> 649c2b1ba4b238307e98856087c7ebe15980581f
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: { background: '#1b5e20', color: '#fff', borderRadius: '12px', fontFamily: 'Outfit' },
              success: { iconTheme: { primary: '#66bb6a', secondary: '#fff' } }
            }}
          />
        </div>
<<<<<<< HEAD
      </AuthProvider>
    </Router>
=======
      </Router>
    </AgriProvider>
>>>>>>> 649c2b1ba4b238307e98856087c7ebe15980581f
  );
}

export default App;
