import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/auth/SignupPage/Signup";
import Login from "./Components/auth/LoginPage/Login";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Featured from "./Components/Featured/Featured";
import Renter from "./Components/RenterForm/RenterForm";
import CarCollection from "./Components/Header/CarCollection";
import Booking from "./Components/CarBooking/Booking";
import Payment from "./Components/CarBooking/PaymentPage/Payment";
import { AppProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/collection" element={<CarCollection />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/payment" element={<Payment />} />
            <Route path="/renter" element={<Renter />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      </Router>
    </AppProvider>
  );
};

export default App;
