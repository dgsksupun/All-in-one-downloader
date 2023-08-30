
import LandingArea from "./components/LandingArea";
import Navbar from "./components/Navbar";
import FbDownpage from "./components/FbDownpage";
import YtDownpage from "./components/YtDownpage";
import InstaDownpage from "./components/InstaDownpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DownloaderFeed from "./components/DownloaderFeed";


function App() {
  return (
    <>
    <Navbar/>
    <FbDownpage/>
    </>
    
    // <div className="App">  
    // <Router>
    // <Navbar />  
    // <LandingArea />
    //    <Routes>
       
    //     <Route path="/facebook" component={FbDownpage} />
    //     <Route path="/instagram" component={InstaDownpage} />
    //     <Route path="/youtube" component={YtDownpage} />
    //   </Routes>
    // </Router> 
    // </div>
  );
}

export default App;

