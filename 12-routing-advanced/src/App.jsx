import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import NavBar2 from "./components/NavBar2";

const App = () => {
    return (
        <div className=" h-screen bg-black text-white">
            <Navbar />
            <NavBar2 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                {/* dynamic routing  */}
                <Route path="/courses/:courseid" element={<CourseDetail />} />

                {/* nested routes */}
                <Route path="/product" element={<Product />}>
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                </Route>

                {/* not found page route */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
