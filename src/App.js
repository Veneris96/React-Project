import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ErrorPage from './components/ErrorPage'
import BookDetails from "./components/BookDetails";
import ContactUs from "./pages/ConctatUs";
import AboutUs from "./pages/AboutUs";
import './styles/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App