import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Testimonial from './Pages/Testimonial';
import AboutUs from './Pages/AboutUs';
import Tracker from './Pages/Tracker';
import Auth from './Components/Auth/Auth';
import BloodPressureForm from './Components/TrackerForms/BloodPressureForm';
import SugarForm from './Components/TrackerForms/SugarForm';
import Weight from './Components/TrackerForms/Weight';
function App() {
  return (
     <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} /> 
          <Route path='/aboutus' element={<AboutUs/>} /> 
          <Route path='/testimonial' element={<Testimonial/>} /> 
          <Route path='/tracker' element={<Tracker/>} /> 
          <Route path='/auth' element={<Auth/>} /> 
          <Route path='/Tracker/bloodPressureTracker' element={<BloodPressureForm/>} /> 
          <Route path='/Tracker/bloodSugarTracker' element={<SugarForm/>} /> 
          <Route path='/Tracker/weightTracker' element={<Weight/>} /> 
        </Routes>
        
    </BrowserRouter>
    </div>
  );
}

export default App;
