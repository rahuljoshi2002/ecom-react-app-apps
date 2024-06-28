import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layouts/Layout";
import Contact from "./Components/Pages/Contact";
import Registration from "./Components/Pages/Registration";
import SignIn from "./Components/Pages/SignIn";
import WishList from "./Components/Pages/WishList";
import LearnHooks from "./Components/Modules/LearnHooks";
import Add from "./Components/Pages/Admin/Category/Add";


function App () {
  return (
    <BrowserRouter>
    <Routes>
      < Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/learnhooks" element={<LearnHooks />}/>
        </Route>
          
          </Routes>
          </BrowserRouter>
  );
};

export default App;