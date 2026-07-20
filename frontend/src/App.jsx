import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/Common/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Footer from "./components/Common/Footer";
function App() {
  return (
   <div className="px-10  bg-white border rounded-md">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;