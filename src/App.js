import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Services from "./Routes/Services/Services"
import ServiceDetails from './Routes/Services/ServiceDetails';
import Histery from './Routes/Pages/Histery';
import Team from './Routes/Pages/Team';
import TeamDetails from './Routes/Pages/TeamDetails';
import Testimonial from './Routes/Pages/Testimonial';
import Gallery from './Routes/Pages/Gallery';
import GalleryDetails from './Routes/Pages/GalleryDetails';
import FAQs from './Routes/Pages/FAQs';
import PricingCard from './Routes/Pages/PricingCard';
import CommingSoon from './Routes/Pages/CommingSoon';
import Error404 from './Routes/Pages/Error404';
import Blogs from './Routes/Blogs/Blogs';
import BlogList from './Routes/Blogs/BlogList';
import BlogDetails from './Routes/Blogs/BlogDetails';
import Contact from './Routes/Contact';
import Appointment from './Routes/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/Home' element={<Home/>}  />
        <Route path='/Home/About_Us' element={<About/>} />

        <Route path='/Home/Our_Services' element={<Services />} />
        <Route path='/Home/Our_Services/Service_Details' element={<ServiceDetails/>} />

        <Route path='/Home/Company_History' element={<Histery />} />
        <Route path='/Home/Our_Team' element={<Team />} />
        <Route path='/Home/Our_Team/Team_Details' element={<TeamDetails/>} />
        <Route path='/Home/Testimonial' element={<Testimonial/>} />
        <Route path='/Home/Gallery' element={<Gallery/>} />
        <Route path='/Home/Gallery/Gallery_Details' element={<GalleryDetails/>} />
        <Route path='/Home/FAQ' element={<FAQs/>} />
        <Route path='/Home/Pricing_Table' element={<PricingCard/>} />
        <Route path='/Home/Comming_Soon' element={<CommingSoon/>} />
        <Route path='/Home/Error404' element={<Error404 />} />

        <Route path='/Home/Blogs' element={<Blogs />} />
        <Route path='/Home/Blog_Lists' element={<BlogList />} />
        <Route path='/Home/Blogs/Blog_Details' element={<BlogDetails />} />
        
        <Route path='/Home/Contact_Us' element={<Contact/>} />
        <Route path='/Home/Make_An_Appointment' element={<Appointment/>} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
