import './app.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import ActualLinks from "./components/ActualLinks";
import SmallGridGallery from "./components/SmallGridGallery";
import MediumGridGallery from "./components/MediumGridGallery";
import ShowMore from "./components/ShowMore";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app bg-red-400">
            <Header/>
            <Slider/>
            <ActualLinks/>
            <SmallGridGallery/>
            <MediumGridGallery/>
            <ShowMore/>
            <Footer/>
        </div>
    );
}

export default App;
