import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HighAvailabilityComponent from './components/Cloud/HighAvailabilityComponent';
import ComputeNetworking from './components/CoreAzureServices/ComputeNetworking';
import Home from './Home';
import Quiz from './components/Quiz';
import AzureManagementGovernance from './components/AzureManagementGovernance';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/high-availability" element={<HighAvailabilityComponent />} />
          <Route path="/compute-networking" element={<ComputeNetworking />} />
          <Route path="/azure-management" element={<AzureManagementGovernance />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
