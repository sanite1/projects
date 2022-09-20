import CardT from "./Components/Card";
import Navbar from "./Components/Navbar";
import Project from "./Components/Projects";



function App() {

    const year = new Date().getFullYear()

    return (
        <div className="App">
            <Navbar />
            <Project />
            {/* <CardT /> */}
            <div className="card-footer">
                <a href="/" className="txt">Copyright {year}. Sanni Collins</a>
            </div>
        </div>
    );
}
  
export default App;