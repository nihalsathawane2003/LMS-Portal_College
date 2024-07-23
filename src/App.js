
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/login';
import CourseList from './pages/list';
import Signup from './pages/signup';
// import UploadVideo from './pages/uploadvideo';
import Dashboard from './pages/dashboard';
// import ProtectedRoute from './pages/permission';
import DepartmentDetail from './pages/DepartmentDetail';
import DepartmentDetail1 from './pages/DepartmentDetail1';
import DepartmentDetail2 from './pages/DepartmentDetail2';
import DepartmentDetail3 from './pages/DepartmentDetail3';
import DepartmentDetail4 from './pages/DepartmentDetail4';
import DepartmentDetail5 from './pages/DepartmentDetail5';
import DepartmentDetail6 from './pages/DepartmentDetail6';
import DepartmentDetail7 from './pages/DepartmentDetail7';
// import Loginpage from './pages/Login'; // Import Logopage from the correct path
import './App.css';
import ComputerOrganization from './pages/computer/ComputerOrganization';
import ProgrammingDataStructures from './pages/computer/ProgrammingDataStructures';
import Algorithms from './pages/computer/Algorithms';
import TheoryOfComputation from './pages/computer/TheoryOfComputation';
import OperatingSystem from './pages/computer/OperatingSystem';
import Databases from './pages/computer/Databases';
import ComputerNetworks from './pages/computer/ComputerNetworks';
import DigitalLogicDesign from './pages/computer/DigitalLogicDesign';
import CompilerDesign from './pages/computer/CompilerDesign';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <MainNavbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department/Computer Engineering" element={<DepartmentDetail />} />
            <Route path="/department/Electrical Engineering" element={<DepartmentDetail1 />} />
            <Route path="/department/Civil Engineering" element={<DepartmentDetail2 />} />
            <Route path="/department/Electronics & Telecommunications Engineering" element={<DepartmentDetail3 />} />
            <Route path="/department/Information Technology Engineering" element={<DepartmentDetail4 />} />
            <Route path="/department/Mechanical Engineering" element={<DepartmentDetail5 />} />
            <Route path="/department/Petrochemical Engineering" element={<DepartmentDetail6 />} />
            <Route path="/department/Chemical Engineering" element={<DepartmentDetail7 />} />
            <Route path="/department/:name/computer-organization-and-architecture" element={<ComputerOrganization />} />
            <Route path="/department/:name/programming-and-data-structures" element={<ProgrammingDataStructures />} />
            <Route path="/department/:name/algorithms" element={<Algorithms />} />
            <Route path="/department/:name/theory-of-computation" element={<TheoryOfComputation />} />
            <Route path="/department/:name/operating-system" element={<OperatingSystem />} />
            <Route path="/department/:name/databases" element={<Databases />} />
            <Route path="/department/:name/computer-networks" element={<ComputerNetworks />} />
            <Route path="/department/:name/digital-logic-and-design" element={<DigitalLogicDesign />} />
            <Route path="/department/:name/compiler-design" element={<CompilerDesign />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courselist" element={<CourseList />} />

            {/* <Route path="/login1" element={<Login1 />} /> */}
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;