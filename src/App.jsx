import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <main className="flex justify-center items-center w-full bg-pokevista bg-contain h-[92vh]">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
