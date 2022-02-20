import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import MenuPage from "./pages/menu-page/MenuPage";
import BlogPage from "./pages/blog-page/BlogPage";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

import "./global.scss";

function App() {
  return (
    <div className="App">
      <div className="topbar-info">
        <div className="info">
          <LocationOnIcon className="info-icon" />
          <p>146 Cửa hàng khắp cả nước</p>
        </div>
        <div className="info">
          <PhoneIcon className="info-icon" />
          <p>Đặt hàng: 1800.6936</p>
        </div>
        <div className="info">
          <DeliveryDiningIcon className="info-icon" />
          <p>Freeship từ 50.000vnđ</p>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
