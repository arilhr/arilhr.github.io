import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { MainNavbar } from "./components/Navbar/MainNavbar";
import { Routers } from "./routes/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
