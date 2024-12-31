
import React from "react";
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login"; // Import Login Component
import Signup from "./pages/signup"; // Import Signup Component
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import TravelPlansPage from "./pages/travelPostPage";
import TravelPlanDetailsPage from "./pages/TravelPlanDetailsPage";
import AboutPage from "./pages/aboutPage";
import ParcelForm from "./pages/ParcelForm";
function App() {
  return (
  
       
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/travelpage" element={<TravelPlansPage/>}/>
      <Route path="/parcel" element={<ParcelForm/>}/>

      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/travel-details/:id" element={<TravelPlanDetailsPage />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
