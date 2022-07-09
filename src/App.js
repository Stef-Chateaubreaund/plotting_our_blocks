import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SubComponents from "./components/SubComponents";
import Advertisement from "./components/Advertisement";

function App() {
return (
    <div className="App">
    <Header />
    <div className="section">
        <Navigation />
        <Main>
            <div className="flexed">

            <SubComponents />
            <SubComponents />
            <SubComponents />
            </div>
            <div className="stef">
            <Advertisement />
            </div>
        </Main>
    </div>
    </div>
);
}

export default App;
