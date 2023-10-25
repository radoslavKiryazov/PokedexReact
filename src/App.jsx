import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <main className="bg-pokevista bg-contain h-[100vh]">
      <NavBar/>
      <div className="flex justify-center items-center w-full p-20">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
