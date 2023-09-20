import { Route , Routes } from "react-router-dom";
import Home from "../pages/Home/index.jsx"
import About from "../pages/About";
import Error from "../pages/Error";
import Team from "../pages/Team"
import Contact from "../pages/Contact"

const index = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </>
    );
};

export default index;