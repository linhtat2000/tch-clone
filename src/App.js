import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import MenuPage from "./pages/menu-page/MenuPage";
import BlogPage from "./pages/blog-page/BlogPage";

function App() {
  return (
    <div className="App">
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
